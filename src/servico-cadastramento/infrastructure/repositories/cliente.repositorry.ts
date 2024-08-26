import { Injectable } from '@nestjs/common';
import { Cliente } from '@prisma/client';
import { ClienteRepositoryInterface } from 'src/servico-cadastramento/domain/interfaces/repository/cliente.repository.interface';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class ClienteRepository implements ClienteRepositoryInterface {
  constructor(private prisma: PrismaService) {}
  async create(cliente: Cliente): Promise<Cliente> {
    return this.prisma.cliente.create({
      data: cliente,
    });
  }

  async findAll(): Promise<Cliente[]> {
    return this.prisma.cliente.findMany();
  }

  async delete(codigo: number): Promise<Cliente> {
    return this.prisma.cliente.delete({
      where: { codigo: codigo },
    });
  }
}
