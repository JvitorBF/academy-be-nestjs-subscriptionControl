import { Inject, Injectable } from '@nestjs/common';
import { AssinaturaValidaRepositoryInterface } from 'src/servico-assinatura-valida/domain/repository/assinatura-valida.repository.interface';
import { AssinaturaValidaServiceInterface } from 'src/servico-assinatura-valida/domain/service/assinatura-valida.service.interface';

@Injectable()
export class AssinaturaValidaService
  implements AssinaturaValidaServiceInterface
{
  constructor(
    @Inject('AssinaturaValidaRepositoryInterface')
    private readonly assinaturaValidaRepository: AssinaturaValidaRepositoryInterface,
  ) {}

  async adicionarAssinatura(codass: number, expiraEm: number): Promise<void> {
    return this.assinaturaValidaRepository.adicionarAssinatura(codass, expiraEm);
  }

  async verificarAssinatura(codass: number): Promise<boolean> {
    return this.assinaturaValidaRepository.verificarAssinatura(codass);
  }
}
