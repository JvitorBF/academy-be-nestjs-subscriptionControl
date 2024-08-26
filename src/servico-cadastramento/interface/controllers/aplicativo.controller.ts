import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CriarAplicativosUseCase } from '../../application/use-cases/aplicativo-use-case/criar-aplicativos.use-case';
import { ListarAplicativosUseCase } from '../../application/use-cases/aplicativo-use-case/listar-aplicativos.use-case';
import { PatchAplicativosUseCase } from '../../application/use-cases/aplicativo-use-case/patch-aplicativos.use-case';
import { Aplicativo } from '@prisma/client';
import { CreateAplicativoDTO, PatchAplicativoDTO } from '../dtos/aplicativo.dto';
import { DeletarAplicativosUseCase } from 'src/servico-cadastramento/application/use-cases/aplicativo-use-case/deletar-aplicativos.use-case';
@Controller('servcad')
export class AplicativoController {
  constructor(
    private readonly criarAplicativosUseCase: CriarAplicativosUseCase,
    private readonly listarAplicativosUseCase: ListarAplicativosUseCase,
    private readonly patchAplicativosUseCase: PatchAplicativosUseCase,
    private readonly deletarAplicativoUseCase: DeletarAplicativosUseCase,
  ) {}

  @Get('aplicativos')
  async getAll(): Promise<Aplicativo[]> {
    return this.listarAplicativosUseCase.execute();
  }

  @Post('aplicativos')
  async create(
    @Body(new ValidationPipe({ whitelist: true })) body: CreateAplicativoDTO,
  ): Promise<CreateAplicativoDTO> {
    return this.criarAplicativosUseCase.execute(body);
  }

  @Patch('aplicativos/:codigo')
  async patch(
    @Param('codigo', ParseIntPipe) codigo: number,
    @Body(new ValidationPipe({ whitelist: true })) body: PatchAplicativoDTO,
  ): Promise<PatchAplicativoDTO> {
    return this.patchAplicativosUseCase.execute(codigo, body);
  }

  @Delete('aplicativos/:codigo')
  async delete(
    @Param('codigo', ParseIntPipe) codigo: number,
  ): Promise<Aplicativo> {
    return this.deletarAplicativoUseCase.execute(codigo);
  }
}
