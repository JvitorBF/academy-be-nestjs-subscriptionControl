import { Inject, Injectable } from '@nestjs/common';
import { AplicativoServiceInterface } from '../../../domain/interfaces/service/aplicativo.service.interface';
import { Aplicativo } from '@prisma/client';
import { PatchAplicativoDTO } from 'src/servico-cadastramento/interface/dtos/aplicativo.dto';

@Injectable()
export class PatchAplicativosUseCase {
  constructor(
    @Inject('AplicativoServiceInterface')
    private aplicativoService: AplicativoServiceInterface,
  ) {}

  async execute(
    codigo: number,
    dto: PatchAplicativoDTO,
  ): Promise<Aplicativo | null> {
    return this.aplicativoService.patch(codigo, dto);
  }
}
