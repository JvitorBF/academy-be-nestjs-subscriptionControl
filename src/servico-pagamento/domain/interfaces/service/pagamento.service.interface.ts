import { Pagamento } from "@prisma/client";
import { CreateAplicativoDTO, PatchAplicativoDTO } from "src/servico-cadastramento/interface/dtos/aplicativo.dto";
import { CreatePagamentoDTO } from "src/servico-pagamento/interface/dtos/pagamento.dto";

export interface PagamentoServiceInterface {
  create(dto: CreatePagamentoDTO): Promise<Pagamento>;
  findById(codigo: number): Promise<Pagamento | null>;
  findAll(): Promise<Pagamento[]>;
}
