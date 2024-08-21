import { Module } from '@nestjs/common';
import { AplicativoRepository } from './repositories/aplicativo.repository';
import { PrismaModule } from './database/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: 'AplicativoRepositoryInterface',
      useClass: AplicativoRepository,
    },
  ],
  exports: [
    'AplicativoRepositoryInterface',
    PrismaModule,
  ],
})
export class InfrastructureModule {}
