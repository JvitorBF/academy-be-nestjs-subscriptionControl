import { Module } from '@nestjs/common';
import { AplicativoRepository } from './repositories/aplicativo.repository';
import { PrismaModule } from './database/prisma/prisma.module';
import { ClienteRepository } from './repositories/cliente.repositorry';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: 'AplicativoRepositoryInterface',
      useClass: AplicativoRepository,
    },
    {
      provide: 'ClienteRepositoryInterface',
      useClass: ClienteRepository,
    },
  ],
  exports: [
    'AplicativoRepositoryInterface',
    'ClienteRepositoryInterface',
    PrismaModule,
  ],
})
export class InfrastructureModule {}
