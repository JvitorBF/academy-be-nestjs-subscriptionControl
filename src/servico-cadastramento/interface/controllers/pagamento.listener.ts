// src/servico-cadastramento/infrastructure/listeners/pagamento.listener.ts
import { Controller } from '@nestjs/common';
import {
  MessagePattern,
  Payload,
  Ctx,
  RmqContext,
} from '@nestjs/microservices';

@Controller()
export class PagamentoListener {
  @MessagePattern('PagamentoServicoCadastramento')
  async handlePagamentoCadastramento(
    @Payload() data: any,
    @Ctx() context: RmqContext,
  ) {
    console.log('Pagamento recebido:', data);

    // Acessando a mensagem original do RabbitMQ
    const originalMessage = context.getMessage();
    console.log('Mensagem original:', originalMessage);
  }
}
