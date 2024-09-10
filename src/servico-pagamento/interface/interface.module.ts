import { Module } from '@nestjs/common';
import { ServicoPagamentosController } from './controller/pagamento.controller';
import { ApplicationModule } from '../application/application.module';

@Module({
  imports: [ApplicationModule],
  controllers: [ServicoPagamentosController],
})
export class InterfaceModule {}
