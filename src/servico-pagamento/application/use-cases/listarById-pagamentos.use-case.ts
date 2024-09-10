import { Inject, Injectable } from '@nestjs/common';
import { Pagamento } from '@prisma/client';
import { PagamentoServiceInterface } from 'src/servico-pagamento/domain/interfaces/service/pagamento.service.interface';

@Injectable()
export class ListarByIdPagamentosUseCase {
  constructor(
    @Inject('PagamentoServiceInterface')
    private pagamentoService: PagamentoServiceInterface,
  ) {}

  async execute(codigo: number): Promise<Pagamento> {
    return this.pagamentoService.findById(codigo);
  }
}
