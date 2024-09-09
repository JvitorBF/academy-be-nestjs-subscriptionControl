// src/servico-pagamento/application/use-cases/criar-pagamentos.use-case.ts
import { Inject, Injectable } from '@nestjs/common';
import { PagamentoServiceInterface } from 'src/servico-pagamento/domain/interfaces/service/pagamento.service.interface';
import { CreatePagamentoDTO } from 'src/servico-pagamento/interface/dtos/pagamento.dto';
import { MessageBroker } from 'src/rabbitmq/interfaces/message-broker.interface';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class CriarPagamentosUseCase {
  constructor(
    @Inject('PagamentoServiceInterface')
    private readonly pagamentoService: PagamentoServiceInterface,
    @Inject('MessageBroker')
    private readonly messageBroker: MessageBroker,
  ) {}

  async execute(dto: CreatePagamentoDTO): Promise<CreatePagamentoDTO> {
    // Cria o pagamento
    const pagamento = await this.pagamentoService.create(dto);

    try {
      // Emissão dos eventos
      await lastValueFrom(
        this.messageBroker.emitirEvento('PagamentoServicoCadastramento', dto),
      );

      // Implementar os eventos de assinatura
      /* await lastValueFrom(
        this.messageBroker.emitirEvento(
          'PagamentoServicoAssinaturaValida',
          dto,
        ),
      ); */
    } catch (error) {
      // Lida com qualquer erro que possa ocorrer durante a emissão dos eventos
      console.error('Erro ao emitir eventos:', error);
    }

    return pagamento;
  }
}
