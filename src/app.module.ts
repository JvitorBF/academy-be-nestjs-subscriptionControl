import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager'; // Certifique-se de que esse caminho está correto
import * as redisStore from 'cache-manager-redis-store';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicoCadastramentoModule } from './servico-cadastramento/servico-cadastramento.module';
import { ServicoPagamentoModule } from './servico-pagamento/servico-pagamento.module';
import { RabbitMQModule } from './rabbitmq/rabbitmq.module';
import { ServicoAssinaturasValidaModule } from './servico-assinatura-valida/servico-assinaturas-valida.module';

@Module({
  imports: [
    ServicoCadastramentoModule,
    ServicoPagamentoModule,
    ServicoAssinaturasValidaModule,
    RabbitMQModule,
    CacheModule.register({
      store: redisStore,
      url: process.env.REDIS_URL, // URL do Redis
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
