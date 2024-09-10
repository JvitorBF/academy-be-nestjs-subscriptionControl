import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CriarAssinaturaValidaUseCase } from '../../application/use-cases/criar-assinatura-valida.use-case';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs'; // Para converter o Observable em Promise

@Controller()
export class PagamentoListener {
  constructor(
    private readonly criarAssinaturaValidaUseCase: CriarAssinaturaValidaUseCase,
    private readonly httpService: HttpService, // Serviço para consulta HTTP
  ) {}

  @MessagePattern('PagamentoServicoAssinaturaValida')
  async handlePagamentoAssinaturaValida(@Payload() data: any) {
    const { codAssinatura } = data;

    // 1. Consultar todas as assinaturas do tipo 'ativa'
    let assinaturas;
    try {
      const response = await lastValueFrom(
        this.httpService.get(
          `http://localhost:3000/servcad/assinaturas/ATIVAS`,
        ),
      );
      assinaturas = response.data;
    } catch (error) {
      console.error('Erro ao consultar assinaturas:', error);
      return;
    }

    const assinatura = assinaturas.find((assinatura) => {
      return Number(assinatura.codigo) === Number(codAssinatura);
    });

    if (!assinatura) {
      console.error(`Assinatura com código ${codAssinatura} não encontrada`);
      return;
    }

    // 3. Verificar se a assinatura está ativa
    if (assinatura.status === 'ATIVA') {
      // Calcular o tempo de expiração em segundos (tempo restante até o vencimento)
      const dataAtual = new Date();
      const dataVencimento = new Date(assinatura.fimVigencia);
      console.log(assinatura.fimVigencia);
      // Calcular a diferença em segundos
      const expiraEm = Math.max(
        0,
        Math.floor((dataVencimento.getTime() - dataAtual.getTime()) / 1000),
      );

      // 4. Atualizar a validade da assinatura no cache
      await this.criarAssinaturaValidaUseCase.execute(codAssinatura, expiraEm);
      console.log(
        `Assinatura ${codAssinatura} atualizada no cache com expiração em ${expiraEm} segundos.`,
      );
    } else {
      console.log(`Assinatura ${codAssinatura} não está ativa.`);
    }
  }
}
