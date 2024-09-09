import { Module } from '@nestjs/common';
import { PagamentoRepository } from '../infrastructure/repositories/pagamento.repository';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { PagamentoService } from './service/pagamento.service';
import { CriarPagamentosUseCase } from './use-cases/criar-pagamentos.use-case';
import { ListarPagamentosUseCase } from './use-cases/listar-pagamentos.use-case';
import { ListarByIdPagamentosUseCase } from './use-cases/listarById-pagamentos.use-case';
import { RabbitMQModule } from 'src/rabbitmq/rabbitmq.module';

@Module({
  imports: [InfrastructureModule, RabbitMQModule],
  providers: [
    PagamentoRepository,
    PagamentoService,
    CriarPagamentosUseCase,
    ListarPagamentosUseCase,
    ListarByIdPagamentosUseCase,
    {
      provide: 'PagamentoRepositoryInterface',
      useExisting: PagamentoRepository,
    },
    {
      provide: 'PagamentoServiceInterface',
      useExisting: PagamentoService,
    },
  ],
  exports: [
    'PagamentoServiceInterface',
    PagamentoService,
    CriarPagamentosUseCase,
    ListarPagamentosUseCase,
    ListarByIdPagamentosUseCase,
  ],
})
export class ApplicationModule {}
