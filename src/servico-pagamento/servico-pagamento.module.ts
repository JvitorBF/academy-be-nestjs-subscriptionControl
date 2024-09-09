import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { InterfaceModule } from './interface/interface.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [ApplicationModule, InterfaceModule, InfrastructureModule],
})
export class ServicoPagamentoModule {}
