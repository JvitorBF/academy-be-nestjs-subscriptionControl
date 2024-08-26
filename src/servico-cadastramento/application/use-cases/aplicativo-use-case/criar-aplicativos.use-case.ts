import { Inject, Injectable } from '@nestjs/common';
import { AplicativoServiceInterface } from '../../../domain/interfaces/service/aplicativo.service.interface';
import { Aplicativo } from '@prisma/client';
import { CreateAplicativoDTO } from 'src/servico-cadastramento/interface/dtos/aplicativo.dto';

@Injectable()
export class CriarAplicativosUseCase {
  constructor(
    @Inject('AplicativoServiceInterface')
    private aplicativoService: AplicativoServiceInterface,
  ) {}

  async execute(dto: CreateAplicativoDTO): Promise<Aplicativo> {
    return this.aplicativoService.create(dto);
  }
}
