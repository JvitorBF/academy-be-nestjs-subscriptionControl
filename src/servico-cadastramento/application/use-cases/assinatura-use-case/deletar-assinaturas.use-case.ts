import { Inject, Injectable } from '@nestjs/common';
import { Assinatura } from '@prisma/client';
import { AssinaturaServiceInterface } from 'src/servico-cadastramento/domain/interfaces/service/assinatura.service.interface';

@Injectable()
export class DeletarAssinaturasUseCase {
  constructor(
    @Inject('AssinaturaServiceInterface')
    private assinaturaService: AssinaturaServiceInterface,
  ) {}

  async execute(codigo: number): Promise<Assinatura> {
    return this.assinaturaService.delete(codigo);
  }
}
