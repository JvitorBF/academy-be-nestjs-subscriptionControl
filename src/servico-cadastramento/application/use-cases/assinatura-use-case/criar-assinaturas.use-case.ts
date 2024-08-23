import { Inject, Injectable } from '@nestjs/common';
import { Assinatura } from '@prisma/client';
import { AssinaturaServiceInterface } from 'src/servico-cadastramento/domain/interfaces/service/assinatura.service.interface';
import { CreateAssinaturaDTO } from 'src/servico-cadastramento/interface/dtos/assinatura.dto';

@Injectable()
export class CriarAssinaturasUseCase {
  constructor(
    @Inject('AssinaturaServiceInterface')
    private assinaturaService: AssinaturaServiceInterface,
  ) {}

  async execute(dto: CreateAssinaturaDTO): Promise<Assinatura> {
    return this.assinaturaService.create(
      dto.codApp,
      dto.codCli,
      dto.inicioVigencia,
      dto.fimVigencia,
    );
  }
}
