import { Assinatura } from '@prisma/client';
import { CreateAssinaturaDTO } from 'src/servico-cadastramento/interface/dtos/assinatura.dto';

export interface AssinaturaRepositoryInterface {
  findByAplicativo(codApp: number): Promise<Assinatura[]>;
  findByCliente(codCli: number): Promise<Assinatura[]>;
  create(assinatura: CreateAssinaturaDTO): Promise<Assinatura>;
  findAll(): Promise<Assinatura[]>;
  delete(codigo: number): Promise<Assinatura>;
}
