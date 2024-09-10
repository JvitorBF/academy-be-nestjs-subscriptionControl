import { Inject } from "@nestjs/common";
import { AssinaturaValidaServiceInterface } from "src/servico-assinatura-valida/domain/service/assinatura-valida.service.interface";

export class VerificaAssinaturaValidaUseCase {
  constructor(
    @Inject('AssinaturaValidaServiceInterface')
    private readonly assinaturaValidaService: AssinaturaValidaServiceInterface,
  ) {}

  async execute(codass: number): Promise<boolean> {
    return this.assinaturaValidaService.verificarAssinatura(codass);
  }
}
