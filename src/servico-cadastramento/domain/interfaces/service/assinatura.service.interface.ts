import { Assinatura } from '@prisma/client';

export interface AssinaturaServiceInterface {
  create(
    codApp: number,
    codCli: number,
    inicioVigencia: Date,
    fimVigencia: Date,
  ): Promise<Assinatura>;

  findByType(tipo: string): Promise<Assinatura[]>;

  findByCli(codCli: number): Promise<Assinatura[]>;

  findByApp(codApp: number): Promise<Assinatura[]>;

  delete(codigo: number): Promise<Assinatura>;
}
