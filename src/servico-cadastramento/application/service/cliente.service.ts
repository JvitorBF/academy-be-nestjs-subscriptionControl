import { Inject, Injectable } from '@nestjs/common';
import { Cliente } from '@prisma/client';
import { ClienteRepositoryInterface } from 'src/servico-cadastramento/domain/interfaces/repository/cliente.repository.interface';
import { ClienteServiceInterface } from 'src/servico-cadastramento/domain/interfaces/service/cliente.service.interface';

@Injectable()
export class ClienteService implements ClienteServiceInterface {
  constructor(
    @Inject('ClienteRepositoryInterface')
    private readonly clienteRepository: ClienteRepositoryInterface,
  ) {}

  async create(nome: string, email: string): Promise<Cliente> {
    const cliente: Cliente = { codigo: undefined, nome: nome, email: email };
    return this.clienteRepository.create(cliente);
  }

  async findAll(): Promise<Cliente[]> {
    return this.clienteRepository.findAll();
  }

  async delete(codigo: number): Promise<Cliente> {
    return this.clienteRepository.delete(codigo);
  }
}
