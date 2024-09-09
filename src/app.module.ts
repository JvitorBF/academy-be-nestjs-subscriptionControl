import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicoCadastramentoModule } from './servico-cadastramento/servico-cadastramento.module';
import { ServicoPagamentoModule } from './servico-pagamento/servico-pagamento.module';
import { RabbitMQModule } from './rabbitmq/rabbitmq.module';

@Module({
  imports: [ServicoCadastramentoModule, ServicoPagamentoModule, RabbitMQModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
