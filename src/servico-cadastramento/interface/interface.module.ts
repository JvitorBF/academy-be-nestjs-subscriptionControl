import { Module } from '@nestjs/common';
import { AplicativoController } from './controllers/aplicativo.controller';
import { ApplicationModule } from '../application/application.module';
import { ClienteController } from './controllers/cliente.controller';
import { AssinaturaController } from './controllers/assinatura.controller';

@Module({
  imports: [ApplicationModule],
  controllers: [AplicativoController, ClienteController, AssinaturaController]
})
export class InterfaceModule {}
