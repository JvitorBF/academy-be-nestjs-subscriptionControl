import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
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
  async create(@Body() body: CreateClienteDTO): Promise<CreateClienteDTO> {
    return this.criarClienteUseCase.execute(body);
  }

  @Delete('clientes/:codigo')
  async delete(@Param('codigo') codigo: string): Promise<Cliente> {
    const codigoInt = parseInt(codigo, 10);
    if (isNaN(codigoInt)) {
      throw new BadRequestException('Invalid code');
    }
    return this.deletarClienteUseCase.execute(codigoInt);
  }
}
