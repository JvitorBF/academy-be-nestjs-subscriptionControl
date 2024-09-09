import { Pagamento } from '@prisma/client';
import { CreatePagamentoDTO } from 'src/servico-pagamento/interface/dtos/pagamento.dto';

export interface PagamentoRepositoryInterface {
  create(pagamento: CreatePagamentoDTO): Promise<Pagamento>;
  findById(codigo: number): Promise<Pagamento | null>;
  findAll(): Promise<Pagamento[]>;
}
