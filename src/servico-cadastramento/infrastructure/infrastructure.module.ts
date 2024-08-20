import { Module } from '@nestjs/common';
import { AplicativoRepository } from './repositories/aplicativo.repository';
import { ClienteRepository } from './repositories/cliente.repository';

@Module({
  providers: [ClienteRepository, AplicativoRepository],
})
export class InfrastructureModule {}
