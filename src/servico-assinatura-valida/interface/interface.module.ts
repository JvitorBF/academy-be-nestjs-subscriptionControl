import { Module } from '@nestjs/common';
import { PagamentoListener } from './controllers/pagamento.listener';
import { RabbitMQModule } from 'src/rabbitmq/rabbitmq.module';
import { AssinaturaValidaController } from './controllers/assinatura-valida.controller';
import { ApplicationModule } from '../application/application.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ApplicationModule, RabbitMQModule, HttpModule],
  controllers: [AssinaturaValidaController, PagamentoListener],
})
export class InterfaceModule {}
