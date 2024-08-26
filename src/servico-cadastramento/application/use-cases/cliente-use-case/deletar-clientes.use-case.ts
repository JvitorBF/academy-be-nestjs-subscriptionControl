import { Inject, Injectable } from '@nestjs/common';
import { Cliente } from '@prisma/client';
import { ClienteServiceInterface } from 'src/servico-cadastramento/domain/interfaces/service/cliente.service.interface';

@Injectable()
export class DeletarClientesUseCase {
  constructor(
    @Inject('ClienteServiceInterface')
    private clienteService: ClienteServiceInterface,
  ) {}

  async execute(codigo: number): Promise<Cliente> {
    return this.clienteService.delete(codigo);
  }
}
