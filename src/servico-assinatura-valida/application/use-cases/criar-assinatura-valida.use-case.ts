import { Inject } from '@nestjs/common';
import { AssinaturaValidaServiceInterface } from 'src/servico-assinatura-valida/domain/service/assinatura-valida.service.interface';

export class CriarAssinaturaValidaUseCase {
  constructor(
    @Inject('AssinaturaValidaServiceInterface')
    private readonly assinaturaValidaService: AssinaturaValidaServiceInterface,
  ) {}

  async execute(codass: number, expiraEm: number): Promise<void> {
    return this.assinaturaValidaService.adicionarAssinatura(codass, expiraEm);
  }
}
