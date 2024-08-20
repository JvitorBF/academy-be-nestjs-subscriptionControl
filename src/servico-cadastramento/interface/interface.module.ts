import { Module } from '@nestjs/common';
import { ClienteController } from './controllers/cliente.controller';
import { AplicativoController } from './controllers/aplicativo.controller';

@Module({
  controllers: [ClienteController, AplicativoController]
})
export class InterfaceModule {}
