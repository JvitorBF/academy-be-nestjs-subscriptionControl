import { Module } from '@nestjs/common';
import { AplicativoController } from './controllers/aplicativo.controller';
import { ApplicationModule } from '../application/application.module';
import { ClienteController } from './controllers/cliente.controller';

@Module({
  imports: [ApplicationModule],
  controllers: [AplicativoController, ClienteController]
})
export class InterfaceModule {}
