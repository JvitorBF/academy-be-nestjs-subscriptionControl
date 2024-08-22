import { Cliente } from '@prisma/client';

export interface ClienteRepositoryInterface {
  create(cliente: Cliente): Promise<Cliente>;
  findAll(): Promise<Cliente[]>;
  delete(codigo: number): Promise<Cliente>;
}
