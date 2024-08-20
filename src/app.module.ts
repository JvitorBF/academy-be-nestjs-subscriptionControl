import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicoCadastramentoModule } from './servico-cadastramento/servico-cadastramento.module';

@Module({
  imports: [ServicoCadastramentoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
