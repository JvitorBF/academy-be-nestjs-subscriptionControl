import { Inject, Injectable } from '@nestjs/common';
import { Cliente } from '@prisma/client';
import { ClienteServiceInterface } from 'src/servico-cadastramento/domain/interfaces/service/cliente.service.interface';
import { CreateClienteDTO } from 'src/servico-cadastramento/interface/dtos/cliente.dto';

@Injectable()
export class CriarClientesUseCase {
  constructor(
    @Inject('ClienteServiceInterface')
    private clienteService: ClienteServiceInterface,
  ) {}

  async execute(dto: CreateClienteDTO): Promise<Cliente> {
    return this.clienteService.create(dto);
  }
}
