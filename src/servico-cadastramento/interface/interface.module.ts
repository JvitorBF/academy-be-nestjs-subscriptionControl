import { Module } from '@nestjs/common';
import { AplicativoController } from './controllers/aplicativo.controller';
import { ApplicationModule } from '../application/application.module';
import { ClienteController } from './controllers/cliente.controller';
import { AssinaturaController } from './controllers/assinatura.controller';
import { PagamentoListener } from './controllers/pagamento.listener';
import { RabbitMQModule } from 'src/rabbitmq/rabbitmq.module';

@Module({
  imports: [ApplicationModule, RabbitMQModule],
  controllers: [
    AplicativoController,
    ClienteController,
    AssinaturaController,
    PagamentoListener,
  ],
})
export class InterfaceModule {}
