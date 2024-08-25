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
import { Cliente } from '@prisma/client';
import { CriarClientesUseCase } from 'src/servico-cadastramento/application/use-cases/cliente-use-case/criar-clientes.use-case';
import { DeletarClientesUseCase } from 'src/servico-cadastramento/application/use-cases/cliente-use-case/deletar-clientes.use-case';
import { ListarClientesUseCase } from 'src/servico-cadastramento/application/use-cases/cliente-use-case/listar-clientes.use-case';
import { CreateClienteDTO } from '../dtos/cliente.dto';

@Controller('servcad')
export class ClienteController {
  constructor(
    private readonly criarClienteUseCase: CriarClientesUseCase,
    private readonly listarClienteUseCase: ListarClientesUseCase,
    private readonly deletarClienteUseCase: DeletarClientesUseCase,
  ) {}

  @Get('clientes')
  async getAll(): Promise<Cliente[]> {
    return this.listarClienteUseCase.execute();
  }

  @Post('clientes')
  async create(
    @Body(new ValidationPipe({ whitelist: true })) body: CreateClienteDTO,
  ): Promise<CreateClienteDTO> {
    return this.criarClienteUseCase.execute(body);
  }

  @Delete('clientes/:codigo')
  async delete(
    @Param('codigo', ParseIntPipe) codigo: number,
  ): Promise<Cliente> {
    return this.deletarClienteUseCase.execute(codigo);
  }
}
