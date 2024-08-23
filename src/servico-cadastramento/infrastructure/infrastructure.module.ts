import { Module } from '@nestjs/common';
import { AplicativoRepository } from './repositories/aplicativo.repository';
import { PrismaModule } from './database/prisma/prisma.module';
import { ClienteRepository } from './repositories/cliente.repositorry';
import { AssinaturaRepository } from './repositories/assinatura.repository';

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
    {
      provide: 'AssinaturaRepositoryInterface',
      useClass: AssinaturaRepository,
    },
  ],
  exports: [
    'AplicativoRepositoryInterface',
    'ClienteRepositoryInterface',
    'AssinaturaRepositoryInterface',
    PrismaModule,
  ],
})
export class InfrastructureModule {}
