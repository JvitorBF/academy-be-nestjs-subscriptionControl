// redis.module.ts
import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager'; // Certifique-se de que esse caminho está correto
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: process.env.REDIS_HOST, // Endereço do Redis
      port: Number(process.env.REDIS_PORT), // Porta do Redis
      ttl: 600, // Tempo de expiração (em segundos)
    }),
  ],
  exports: [CacheModule],
})
export class RedisModule {}
