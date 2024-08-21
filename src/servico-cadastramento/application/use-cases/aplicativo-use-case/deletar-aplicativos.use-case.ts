import { Inject, Injectable } from '@nestjs/common';
import { AplicativoServiceInterface } from '../../../domain/interfaces/service/aplicativo.service.interface';
import { Aplicativo } from '@prisma/client';

@Injectable()
export class DeletarAplicativosUseCase {
  constructor(
    @Inject('AplicativoServiceInterface')
    private aplicativoService: AplicativoServiceInterface,
  ) {}

  async execute(codigo: number): Promise<Aplicativo> {
    return this.aplicativoService.delete(codigo);
  }
}
