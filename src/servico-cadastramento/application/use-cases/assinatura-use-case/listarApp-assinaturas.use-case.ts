import { Inject, Injectable } from '@nestjs/common';
import { Assinatura } from '@prisma/client';
import { AssinaturaServiceInterface } from 'src/servico-cadastramento/domain/interfaces/service/assinatura.service.interface';

@Injectable()
export class ListarAppAssinaturasUseCase {
  constructor(
    @Inject('AssinaturaServiceInterface')
    private assinaturaService: AssinaturaServiceInterface,
  ) {}

  async execute(codApp: number): Promise<Assinatura[]> {
    return this.assinaturaService.findByApp(codApp);
  }
}