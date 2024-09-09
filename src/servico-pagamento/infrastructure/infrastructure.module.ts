import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma/prisma.module';
import { PagamentoRepository } from './repositories/pagamento.repository';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: 'PagamentoRepositoryInterface',
      useClass: PagamentoRepository,
    },
  ],
  exports: ['PagamentoRepositoryInterface', PrismaModule],
})
export class InfrastructureModule {}
