import { Cliente } from '@prisma/client';
import { CreateClienteDTO } from 'src/servico-cadastramento/interface/dtos/cliente.dto';

export interface ClienteServiceInterface {
  create(dto: CreateClienteDTO): Promise<Cliente>;
  findAll(): Promise<Cliente[]>;
  delete(codigo: number): Promise<Cliente>;
}
