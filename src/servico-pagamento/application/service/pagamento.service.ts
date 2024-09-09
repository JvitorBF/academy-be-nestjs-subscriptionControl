import { Inject, Injectable } from '@nestjs/common';
import { Pagamento } from '@prisma/client';
import { PagamentoRepositoryInterface } from 'src/servico-pagamento/domain/interfaces/repository/pagamento.respository.interface';
import { PagamentoServiceInterface } from 'src/servico-pagamento/domain/interfaces/service/pagamento.service.interface';
import { CreatePagamentoDTO } from 'src/servico-pagamento/interface/dtos/pagamento.dto';

@Injectable()
export class PagamentoService implements PagamentoServiceInterface {
  constructor(
    @Inject('PagamentoRepositoryInterface')
    private readonly pagamentoRepository: PagamentoRepositoryInterface,
  ) {}

  async create(dto: CreatePagamentoDTO): Promise<Pagamento> {
    return this.pagamentoRepository.create(dto);
  }

  async findById(codigo: number): Promise<Pagamento | null> {
    return this.pagamentoRepository.findById(codigo);
  }

  async findAll(): Promise<Pagamento[]> {
    return this.pagamentoRepository.findAll();
  }
}
