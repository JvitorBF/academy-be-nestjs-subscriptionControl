import { Injectable } from '@nestjs/common';
import { Pagamento } from '@prisma/client';
import { PrismaService } from '../database/prisma/prisma.service';
import { CreatePagamentoDTO } from 'src/servico-pagamento/interface/dtos/pagamento.dto';
import { PagamentoRepositoryInterface } from 'src/servico-pagamento/domain/interfaces/repository/pagamento.respository.interface';
@Injectable()
export class PagamentoRepository implements PagamentoRepositoryInterface {
  constructor(private prisma: PrismaService) {}
  async create(pagamento: CreatePagamentoDTO): Promise<Pagamento> {
    return this.prisma.pagamento.create({
      data: pagamento,
    });
  }

  async findById(codigo: number): Promise<Pagamento | null> {
    return this.prisma.pagamento.findUnique({
      where: { codigo },
    });
  }

  async findAll(): Promise<Pagamento[]> {
    return this.prisma.pagamento.findMany();
  }
}
