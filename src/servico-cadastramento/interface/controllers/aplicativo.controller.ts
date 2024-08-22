import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CriarAplicativosUseCase } from '../../application/use-cases/aplicativo-use-case/criar-aplicativos.use-case';
import { ListarAplicativosUseCase } from '../../application/use-cases/aplicativo-use-case/listar-aplicativos.use-case';
import { PatchAplicativosUseCase } from '../../application/use-cases/aplicativo-use-case/patch-aplicativos.use-case';
import { Aplicativo } from '@prisma/client';
import { CreateAplitivoDTO, PatchAplicativoDTO } from '../dtos/aplicativo.dto';
import { DeletarAplicativosUseCase } from 'src/servico-cadastramento/application/use-cases/aplicativo-use-case/deletar-aplicativos.use-case';
@Controller('aplicativos')
export class AplicativoController {
  constructor(
    private readonly criarAplicativosUseCase: CriarAplicativosUseCase,
    private readonly listarAplicativosUseCase: ListarAplicativosUseCase,
    private readonly patchAplicativosUseCase: PatchAplicativosUseCase,
    private readonly deletarAplicativoUseCase: DeletarAplicativosUseCase,
  ) {}

  /* Endpoint (FASE 1): GET /servcad/aplicativos */ 
  @Get()
  async getAll(): Promise<Aplicativo[]> {
    return this.listarAplicativosUseCase.execute();
  }

  @Post()
  async create(@Body() body: CreateAplitivoDTO): Promise<CreateAplitivoDTO> {
    return this.criarAplicativosUseCase.execute(body);
  }

  /* Endpoint (FASE 1): PATCH /servcad/aplicativos/:idAplicativo */
  @Patch(':codigo')
  async patch(
    @Param('codigo') codigo: string,
    @Body() body: PatchAplicativoDTO,
  ): Promise<PatchAplicativoDTO> {
    const codigoInt = parseInt(codigo, 10);
    if (isNaN(codigoInt)) {
      throw new BadRequestException('Invalid code');
    }
    return this.patchAplicativosUseCase.execute(codigoInt, body);
  }

  @Delete(':codigo')
  async delete(@Param('codigo') codigo: string): Promise<Aplicativo> {
    const codigoInt = parseInt(codigo, 10);
    if (isNaN(codigoInt)) {
      throw new BadRequestException('Invalid code');
    }
    return this.deletarAplicativoUseCase.execute(codigoInt);
  }
}
