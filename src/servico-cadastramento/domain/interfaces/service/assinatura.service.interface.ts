import { Assinatura } from '@prisma/client';
import { CreateAssinaturaDTO } from 'src/servico-cadastramento/interface/dtos/assinatura.dto';

export interface AssinaturaServiceInterface {
  create(dto: CreateAssinaturaDTO): Promise<Assinatura>;

  findByType(tipo: string): Promise<Assinatura[]>;

  findByCli(codCli: number): Promise<Assinatura[]>;

  findByApp(codApp: number): Promise<Assinatura[]>;

  delete(codigo: number): Promise<Assinatura>;
}
