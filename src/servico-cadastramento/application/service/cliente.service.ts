import { Inject, Injectable } from '@nestjs/common';
import { Cliente } from '@prisma/client';
import { ClienteRepositoryInterface } from 'src/servico-cadastramento/domain/interfaces/repository/cliente.repository.interface';
import { ClienteServiceInterface } from 'src/servico-cadastramento/domain/interfaces/service/cliente.service.interface';
import { CreateClienteDTO } from 'src/servico-cadastramento/interface/dtos/cliente.dto';

@Injectable()
export class ClienteService implements ClienteServiceInterface {
  constructor(
    @Inject('ClienteRepositoryInterface')
    private readonly clienteRepository: ClienteRepositoryInterface,
  ) {}

  async create(dto: CreateClienteDTO): Promise<Cliente> {
    return this.clienteRepository.create(dto);
  }

  async findAll(): Promise<Cliente[]> {
    return this.clienteRepository.findAll();
  }

  async delete(codigo: number): Promise<Cliente> {
    return this.clienteRepository.delete(codigo);
  }
}
