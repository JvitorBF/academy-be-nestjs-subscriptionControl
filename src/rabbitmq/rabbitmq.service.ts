// rabbitmq/rabbitmq.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MessageBroker } from './interfaces/message-broker.interface';
import { Observable } from 'rxjs';

@Injectable()
export class RabbitMQService implements MessageBroker {
  constructor(
    @Inject('RABBITMQ_SERVICE') private readonly rabbitClient: ClientProxy,
  ) {}

  // Emite um evento para o RabbitMQ
  emitirEvento(topico: string, payload: any): Observable<void> {
    return this.rabbitClient.emit(topico, payload);
  }
}
