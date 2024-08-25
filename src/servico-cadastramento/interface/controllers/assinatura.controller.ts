import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  ValidationPipe,
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
    @Param('codcli', ParseIntPipe) codcli: number,
  ): Promise<Assinatura[]> {
    const assinaturas: Assinatura[] =
      await this.listarCliAssinaturasUseCase.execute(codcli);

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
    @Param('codapp', ParseIntPipe) codapp: number,
  ): Promise<Assinatura[]> {
    const assinaturas: Assinatura[] =
      await this.listarAppAssinaturasUseCase.execute(codapp);

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
    @Body(new ValidationPipe({ transform: true, whitelist: true }))
    body: CreateAssinaturaDTO,
  ): Promise<CreateAssinaturaDTO> {
    // Converter as strings para Date
    const inicioVigencia = new Date(body.inicioVigencia);
    const fimVigencia = new Date(body.fimVigencia);

    // Criar um novo DTO com as datas convertidas
    const dto: CreateAssinaturaDTO = {
      ...body,
      inicioVigencia,
      fimVigencia,
    };
    return this.criarAssinaturasUseCase.execute(dto);
  }

  @Delete('assinaturas/:codigo')
  async delete(
    @Param('codigo', ParseIntPipe) codigo: number,
  ): Promise<Assinatura> {
    return this.deletarAssinaturasUseCase.execute(codigo);
  }
}
