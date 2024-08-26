import { Aplicativo } from "@prisma/client";
import { CreateAplicativoDTO, PatchAplicativoDTO } from "src/servico-cadastramento/interface/dtos/aplicativo.dto";

export interface AplicativoServiceInterface {
  create(dto: CreateAplicativoDTO): Promise<Aplicativo>;
  findById(codigo: number): Promise<Aplicativo | null>;
  findAll(): Promise<Aplicativo[]>;
  delete(codigo: number): Promise<Aplicativo>;
  patch(codigo: number, dto: PatchAplicativoDTO): Promise<Aplicativo | null>;
}
