import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { AssinaturaValidaRepositoryInterface } from 'src/servico-assinatura-valida/domain/repository/assinatura-valida.repository.interface';

@Injectable()
export class AssinaturaValidaRepository
  implements AssinaturaValidaRepositoryInterface
{
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async adicionarAssinatura(codass: number, expiraEm: number): Promise<void> {
    const chave = codass.toString(); // Corrigido: converte o número para string
    await this.cacheManager.set(chave, true, expiraEm); // `ttl` deve ser um número
  }

  async verificarAssinatura(codass: number): Promise<boolean> {
    const chave = codass.toString(); // Corrigido: converte o número para string
    const isValid = await this.cacheManager.get<boolean>(chave);
    return !!isValid;
  }
}
