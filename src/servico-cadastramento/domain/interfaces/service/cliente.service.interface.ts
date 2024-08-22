import { Cliente } from '@prisma/client';

export interface ClienteServiceInterface {
  create(nome: string, email: string): Promise<Cliente>;
  findAll(): Promise<Cliente[]>;
  delete(codigo: number): Promise<Cliente>;
}
