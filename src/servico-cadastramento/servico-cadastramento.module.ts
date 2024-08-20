import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { InterfaceModule } from './interface/interface.module';
import { ApplicationModule } from './application/application.module';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [InfrastructureModule, InterfaceModule, ApplicationModule, DomainModule]
})
export class ServicoCadastramentoModule {}