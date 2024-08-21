import { Module } from '@nestjs/common';
import { AplicativoService } from './service/aplicativo.service';
import { ListarAplicativosUseCase } from './use-cases/aplicativo-use-case/listar-aplicativos.use-case';
import { CriarAplicativosUseCase } from './use-cases/aplicativo-use-case/criar-aplicativos.use-case';
import { PatchAplicativosUseCase } from './use-cases/aplicativo-use-case/patch-aplicativos.use-case';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { AplicativoRepository } from '../infrastructure/repositories/aplicativo.repository';
import { DeletarAplicativosUseCase } from './use-cases/aplicativo-use-case/deletar-aplicativos.use-case';

@Module({
  imports: [InfrastructureModule],
  providers: [
    ListarAplicativosUseCase,
    CriarAplicativosUseCase,
    DeletarAplicativosUseCase,
    PatchAplicativosUseCase,
    AplicativoService,
    AplicativoRepository,
    {
      provide: 'AplicativoServiceInterface',
      useClass: AplicativoService,
    },
    {
      provide: 'AplicativoRepositoryInterface',
      useExisting: AplicativoRepository,
    },
  ],
  exports: [
    CriarAplicativosUseCase,
    ListarAplicativosUseCase,
    PatchAplicativosUseCase,
    DeletarAplicativosUseCase,
    'AplicativoServiceInterface',
    AplicativoService,
  ],
})
export class ApplicationModule {}
