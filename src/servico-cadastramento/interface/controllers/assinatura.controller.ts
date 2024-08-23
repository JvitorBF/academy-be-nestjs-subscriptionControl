import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { CriarAssinaturasUseCase } from 'src/servico-cadastramento/application/use-cases/assinatura-use-case/criar-assinaturas.use-case';
import { DeletarAssinaturasUseCase } from 'src/servico-cadastramento/application/use-cases/assinatura-use-case/deletar-assinaturas.use-case';
import { ListarAppAssinaturasUseCase } from 'src/servico-cadastramento/application/use-cases/assinatura-use-case/listarApp-assinaturas.use-case';
import { ListarCliAssinaturasUseCase } from 'src/servico-cadastramento/application/use-cases/assinatura-use-case/listarCli-assinaturas.use-case';
import { ListarTipoAssinaturasUseCase } from 'src/servico-cadastramento/application/use-cases/assinatura-use-case/listarTipo-assinaturas.use-case';
import { CreateAssinaturaDTO } from '../dtos/assinatura.dto';
import { Assinatura } from '@prisma/client';
import { calcularStatusAssinatura } from 'src/servico-cadastramento/utils/dateUtils';

@Controller('servcad')
export class AssinaturaController {
  constructor(
    private readonly criarAssinaturasUseCase: CriarAssinaturasUseCase,
    private readonly listarTipoAssinaturasUseCase: ListarTipoAssinaturasUseCase,
    private readonly listarCliAssinaturasUseCase: ListarCliAssinaturasUseCase,
    private readonly listarAppAssinaturasUseCase: ListarAppAssinaturasUseCase,
    private readonly deletarAssinaturasUseCase: DeletarAssinaturasUseCase,
  ) {}

  @Get('assinaturas/:tipo')
  async getAllAssinaturas(@Param('tipo') tipo: string): Promise<Assinatura[]> {
    let assinaturas: Assinatura[] =
      await this.listarTipoAssinaturasUseCase.execute(tipo);

    return assinaturas.map((assinatura) => ({
      codigo: assinatura.codigo,
      codCli: assinatura.codCli,
      codApp: assinatura.codApp,
      inicioVigencia: assinatura.inicioVigencia,
      fimVigencia: assinatura.fimVigencia,
      status: calcularStatusAssinatura(assinatura.fimVigencia),
    }));
  }

  @Get('asscli/:codcli')
  async getAssinaturasByCliente(
    @Param('codcli') codcli: string,
  ): Promise<Assinatura[]> {
    const codCliInt = parseInt(codcli);
    if (isNaN(codCliInt)) {
      throw new BadRequestException('O Código deve ser um número.');
    }
    const assinaturas: Assinatura[] =
      await this.listarCliAssinaturasUseCase.execute(codCliInt);

    return assinaturas.map((assinatura) => ({
      codigo: assinatura.codigo,
      codCli: assinatura.codCli,
      codApp: assinatura.codApp,
      inicioVigencia: assinatura.inicioVigencia,
      fimVigencia: assinatura.fimVigencia,
      status: calcularStatusAssinatura(assinatura.fimVigencia),
    }));
  }

  @Get('assapp/:codapp')
  async getAssinaturasByAplicativo(
    @Param('codapp') codapp: string,
  ): Promise<Assinatura[]> {
    const codAppInt = parseInt(codapp);
    if (isNaN(codAppInt)) {
      throw new BadRequestException('O Código deve ser um número.');
    }
    const assinaturas: Assinatura[] =
      await this.listarAppAssinaturasUseCase.execute(codAppInt);

    return assinaturas.map((assinatura) => ({
      codigo: assinatura.codigo,
      codCli: assinatura.codCli,
      codApp: assinatura.codApp,
      inicioVigencia: assinatura.inicioVigencia,
      fimVigencia: assinatura.fimVigencia,
      status: calcularStatusAssinatura(assinatura.fimVigencia),
    }));
  }

  @Post('assinaturas')
  async create(
    @Body() body: CreateAssinaturaDTO,
  ): Promise<CreateAssinaturaDTO> {
    const inicioVigenciaDate = new Date(body.inicioVigencia);
    const fimVigenciaDate = new Date(body.fimVigencia);

    if (
      isNaN(inicioVigenciaDate.getTime()) ||
      isNaN(fimVigenciaDate.getTime())
    ) {
      throw new BadRequestException(
        'Formato de data inválido. As datas devem estar no formato ISO (YYYY-MM-DD).',
      );
    }

    const assinaturaDto: CreateAssinaturaDTO = {
      ...body,
      inicioVigencia: inicioVigenciaDate,
      fimVigencia: fimVigenciaDate,
    };

    return this.criarAssinaturasUseCase.execute(assinaturaDto);
  }

  @Delete('assinaturas/:codigo')
  async delete(@Param('codigo') codigo: string): Promise<Assinatura> {
    const codigoInt = parseInt(codigo);
    if (isNaN(codigoInt)) {
      throw new BadRequestException('O Código deve ser um número.');
    }
    return this.deletarAssinaturasUseCase.execute(codigoInt);
  }
}
