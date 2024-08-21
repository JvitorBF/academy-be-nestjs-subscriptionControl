import { Inject, Injectable } from '@nestjs/common';
import { Aplicativo } from '@prisma/client';
import { AplicativoServiceInterface } from 'src/servico-cadastramento/domain/interfaces/service/aplicativo.service.interface';

@Injectable()
export class ListarAplicativosUseCase {
  constructor(
    @Inject('AplicativoServiceInterface')
    private aplicativoService: AplicativoServiceInterface,
  ) {}

  async execute(): Promise<Aplicativo[]> {
    return this.aplicativoService.findAll();
  }
}
