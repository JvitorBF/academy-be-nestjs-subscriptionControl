import { Module } from '@nestjs/common';
import { AplicativoController } from './controllers/aplicativo.controller';
import { ApplicationModule } from '../application/application.module';

@Module({
  imports: [ApplicationModule],
  controllers: [AplicativoController]
})
export class InterfaceModule {}
