import { Assinatura } from '@prisma/client';

export interface AssinaturaRepositoryInterface {
  findByAplicativo(codApp: number): Promise<Assinatura[]>;
  findByCliente(codCli: number): Promise<Assinatura[]>;
  create(assinatura: Assinatura): Promise<Assinatura>;
  findAll(): Promise<Assinatura[]>;
  delete(codigo: number): Promise<Assinatura>;
}
