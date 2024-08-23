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
import { AssinaturaService } from './service/assinatura.service';
import { AssinaturaRepository } from '../infrastructure/repositories/assinatura.repository';
import { ListarAppAssinaturasUseCase } from './use-cases/assinatura-use-case/listarApp-assinaturas.use-case';
import { ListarCliAssinaturasUseCase } from './use-cases/assinatura-use-case/listarCli-assinaturas.use-case';
import { ListarTipoAssinaturasUseCase } from './use-cases/assinatura-use-case/listarTipo-assinaturas.use-case';
import { CriarAssinaturasUseCase } from './use-cases/assinatura-use-case/criar-assinaturas.use-case';
import { DeletarAssinaturasUseCase } from './use-cases/assinatura-use-case/deletar-assinaturas.use-case';

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
    CriarAssinaturasUseCase,
    ListarAppAssinaturasUseCase,
    ListarTipoAssinaturasUseCase,
    ListarCliAssinaturasUseCase,
    DeletarAssinaturasUseCase,
    AplicativoService,
    ClienteService,
    AssinaturaService,
    AplicativoRepository,
    ClienteRepository,
    AssinaturaRepository,
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
    {
      provide: 'AssinaturaRepositoryInterface',
      useExisting: AssinaturaRepository,
    },
    {
      provide: 'AssinaturaServiceInterface',
      useExisting: AssinaturaService,
    },
    AssinaturaService,
  ],
  exports: [
    CriarAplicativosUseCase,
    ListarAplicativosUseCase,
    PatchAplicativosUseCase,
    DeletarAplicativosUseCase,
    ListarClientesUseCase,
    CriarClientesUseCase,
    DeletarClientesUseCase,
    CriarAssinaturasUseCase,
    DeletarAssinaturasUseCase,
    ListarAppAssinaturasUseCase,
    ListarCliAssinaturasUseCase,
    ListarTipoAssinaturasUseCase,
    AplicativoService,
    ClienteService,
    AssinaturaService,
    'AplicativoServiceInterface',
    'ClienteServiceInterface',
    'AssinaturaServiceInterface',
  ],
})
export class ApplicationModule {}
