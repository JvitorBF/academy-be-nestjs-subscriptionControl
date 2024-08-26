import { Injectable } from '@nestjs/common';
import { Assinatura } from '@prisma/client';
import { AssinaturaRepositoryInterface } from 'src/servico-cadastramento/domain/interfaces/repository/assinatura.repository.interface';
import { PrismaService } from '../database/prisma/prisma.service';
import { CreateAssinaturaDTO } from 'src/servico-cadastramento/interface/dtos/assinatura.dto';

@Injectable()
export class AssinaturaRepository implements AssinaturaRepositoryInterface {
  constructor(private prisma: PrismaService) {}

  findByAplicativo(codApp: number): Promise<Assinatura[]> {
    return this.prisma.assinatura.findMany({
      where: { codApp },
    });
  }

  findByCliente(codCli: number): Promise<Assinatura[]> {
    return this.prisma.assinatura.findMany({
      where: { codCli },
    });
  }

  async findAll(): Promise<Assinatura[]> {
    return this.prisma.assinatura.findMany();
  }

  async create(assinatura: CreateAssinaturaDTO): Promise<Assinatura> {
    return this.prisma.assinatura.create({
      data: assinatura,
    });
  }

  async delete(codigo: number): Promise<Assinatura> {
    return this.prisma.assinatura.delete({
      where: { codigo },
    });
  }
}
