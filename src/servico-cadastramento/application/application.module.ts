import { Module } from '@nestjs/common';
import { AplicativoService } from './service/aplicativo.service';
import { ClienteService } from './service/cliente.service';
import { listarAplicativosUseCase } from './use-cases/cliente-use-case/listar-aplicativos.use-case';
import { listarClientesUseCase } from './use-cases/aplicativo-use-case/listar-clientes.use-case';

@Module({
  providers: [
    AplicativoService,
    ClienteService,
    listarAplicativosUseCase,
    listarClientesUseCase,
  ],
})
export class ApplicationModule {}
