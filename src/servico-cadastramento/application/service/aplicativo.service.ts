import { Inject, Injectable } from '@nestjs/common';
import { AplicativoServiceInterface } from '../../domain/interfaces/service/aplicativo.service.interface';
import { Aplicativo } from '@prisma/client';
import { AplicativoRepositoryInterface } from 'src/servico-cadastramento/domain/interfaces/repository/aplicativo.repository.interface';

@Injectable()
export class AplicativoService implements AplicativoServiceInterface {
  constructor(
    @Inject('AplicativoRepositoryInterface')
    private readonly aplicativoRepository: AplicativoRepositoryInterface,
  ) {}

  async delete(codigo: number): Promise<Aplicativo> {
    return this.aplicativoRepository.delete(codigo);
  }

  async create(nome: string, custoMensal: number): Promise<Aplicativo> {
    const aplicativo: Aplicativo = { codigo: undefined, nome, custoMensal };
    return this.aplicativoRepository.create(aplicativo);
  }

  async findById(codigo: number): Promise<Aplicativo | null> {
    return this.aplicativoRepository.findById(codigo);
  }

  async findAll(): Promise<Aplicativo[]> {
    return this.aplicativoRepository.findAll();
  }

  async patch(codigo: number, custoMensal: number): Promise<Aplicativo | null> {
    return this.aplicativoRepository.patch(codigo, custoMensal);
  }
}
