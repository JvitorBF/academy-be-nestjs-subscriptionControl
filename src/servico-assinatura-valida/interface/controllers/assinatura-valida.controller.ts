import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { VerificaAssinaturaValidaUseCase } from 'src/servico-assinatura-valida/application/use-cases/verifica-assinatura-valida.use-case';

@Controller('assinvalidas')
export class AssinaturaValidaController {
  constructor(
    private readonly verificaAssinaturaValidaUseCase: VerificaAssinaturaValidaUseCase,
  ) {}

  @Get(':codass')
  async getAll(@Param('codass', ParseIntPipe) codass: number): Promise<boolean> {
    return this.verificaAssinaturaValidaUseCase.execute(codass);
  }
}
