import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/Infrastructure.module';
import { InterfaceModule } from './interface/interface.module';
import { ApplicationModule } from './application/application.module';

@Module({ imports: [InfrastructureModule, InterfaceModule, ApplicationModule] })
export class ServicoAssinaturasValidaModule {}
