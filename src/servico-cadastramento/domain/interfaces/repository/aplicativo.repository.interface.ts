import { Aplicativo } from '@prisma/client';

export interface AplicativoRepositoryInterface {
  create(aplicativo: Aplicativo): Promise<Aplicativo>;
  findById(codigo: number): Promise<Aplicativo | null>;
  findAll(): Promise<Aplicativo[]>;
  delete(codigo: number): Promise<Aplicativo>;
  patch(codigo: number, custoMensal: number): Promise<Aplicativo | null>;
}
