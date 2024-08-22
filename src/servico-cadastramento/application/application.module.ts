import { Module } from '@nestjs/common';
import { AplicativoService } from './service/aplicativo.service';
import { ListarAplicativosUseCase } from './use-cases/aplicativo-use-case/listar-aplicativos.use-case';
import { CriarAplicativosUseCase } from './use-cases/aplicativo-use-case/criar-aplicativos.use-case';
import { PatchAplicativosUseCase } from './use-cases/aplicativo-use-case/patch-aplicativos.use-case';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { AplicativoRepository } from '../infrastructure/repositories/aplicativo.repository';
import { DeletarAplicativosUseCase } from './use-cases/aplicativo-use-case/deletar-aplicativos.use-case';
import { ClienteService } from './service/cliente.service';
import { ClienteRepository } from '../infrastructure/repositories/cliente.repositorry';
import { ListarClientesUseCase } from './use-cases/cliente-use-case/listar-clientes.use-case';
import { CriarClientesUseCase } from './use-cases/cliente-use-case/criar-clientes.use-case';
import { DeletarClientesUseCase } from './use-cases/cliente-use-case/deletar-clientes.use-case';

@Module({
  imports: [InfrastructureModule],
  providers: [
    ListarAplicativosUseCase,
    CriarAplicativosUseCase,
    DeletarAplicativosUseCase,
    PatchAplicativosUseCase,
    ListarClientesUseCase,
    CriarClientesUseCase,
    DeletarClientesUseCase,
    AplicativoService,
    AplicativoRepository,
    ClienteService,
    ClienteRepository,
    {
      provide: 'AplicativoServiceInterface',
      useClass: AplicativoService,
    },
    {
      provide: 'AplicativoRepositoryInterface',
      useExisting: AplicativoRepository,
    },
    {
      provide: 'ClienteServiceInterface',
      useClass: ClienteService,
    },
    {
      provide: 'ClienteRepositoryInterface',
      useExisting: ClienteRepository,
    },
  ],
  exports: [
    CriarAplicativosUseCase,
    ListarAplicativosUseCase,
    PatchAplicativosUseCase,
    DeletarAplicativosUseCase,
    ListarClientesUseCase,
    CriarClientesUseCase,
    DeletarClientesUseCase,
    AplicativoService,
    ClienteService,
    'AplicativoServiceInterface',
    'ClienteServiceInterface',
  ],
})
export class ApplicationModule {}
