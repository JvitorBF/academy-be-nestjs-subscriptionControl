import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/Infrastructure.module';
import { CriarAssinaturaValidaUseCase } from './use-cases/criar-assinatura-valida.use-case';
import { VerificaAssinaturaValidaUseCase } from './use-cases/verifica-assinatura-valida.use-case';
import { AssinaturaValidaService } from './service/assinatura-valida.service';
import { AssinaturaValidaRepository } from '../infrastructure/repositories/assinatura-valida.repository';

@Module({
  imports: [InfrastructureModule],
  providers: [
    CriarAssinaturaValidaUseCase,
    VerificaAssinaturaValidaUseCase,
    AssinaturaValidaService,
    {
      provide: 'AssinaturaValidaServiceInterface',
      useClass: AssinaturaValidaService,
    },
    {
      provide: 'AssinaturaValidaRepositoryInterface',
      useClass: AssinaturaValidaRepository,
    },
  ],
  exports: [
    'AssinaturaValidaServiceInterface',
    CriarAssinaturaValidaUseCase,
    VerificaAssinaturaValidaUseCase,
    AssinaturaValidaService,
  ],
})
export class ApplicationModule {}
