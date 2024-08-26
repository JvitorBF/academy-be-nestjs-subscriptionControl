import { Inject, Injectable } from '@nestjs/common';
import { AplicativoServiceInterface } from '../../domain/interfaces/service/aplicativo.service.interface';
import { Aplicativo } from '@prisma/client';
import { AplicativoRepositoryInterface } from 'src/servico-cadastramento/domain/interfaces/repository/aplicativo.repository.interface';
import { CreateAplicativoDTO, PatchAplicativoDTO } from 'src/servico-cadastramento/interface/dtos/aplicativo.dto';

@Injectable()
export class AplicativoService implements AplicativoServiceInterface {
  constructor(
    @Inject('AplicativoRepositoryInterface')
    private readonly aplicativoRepository: AplicativoRepositoryInterface,
  ) {}

  async delete(codigo: number): Promise<Aplicativo> {
    return this.aplicativoRepository.delete(codigo);
  }

  async create(dto: CreateAplicativoDTO): Promise<Aplicativo> {
    return this.aplicativoRepository.create(dto);
  }

  async findById(codigo: number): Promise<Aplicativo | null> {
    return this.aplicativoRepository.findById(codigo);
  }

  async findAll(): Promise<Aplicativo[]> {
    return this.aplicativoRepository.findAll();
  }

  async patch(codigo: number, dto: PatchAplicativoDTO): Promise<Aplicativo | null> {
    return this.aplicativoRepository.patch(codigo, dto);
  }
}
