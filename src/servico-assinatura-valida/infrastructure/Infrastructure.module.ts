import { Module } from '@nestjs/common';
import { AssinaturaValidaRepository } from './repositories/assinatura-valida.repository';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [RedisModule],
  providers: [
    {
      provide: 'AssinaturaValidaRepositoryInterface',
      useClass: AssinaturaValidaRepository,
    },
  ],
  exports: ['AssinaturaValidaRepositoryInterface', RedisModule],
})
export class InfrastructureModule {}
