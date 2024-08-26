import { Injectable } from '@nestjs/common';
import { AplicativoRepositoryInterface } from '../../domain/interfaces/repository/aplicativo.repository.interface';
import { Aplicativo } from '@prisma/client';
import { PrismaService } from '../database/prisma/prisma.service';
import { CreateAplicativoDTO, PatchAplicativoDTO } from 'src/servico-cadastramento/interface/dtos/aplicativo.dto';
@Injectable()
export class AplicativoRepository implements AplicativoRepositoryInterface {
  constructor(private prisma: PrismaService) {}

  async delete(codigo: number): Promise<Aplicativo> {
    return this.prisma.aplicativo.delete({
      where: {
        codigo: codigo,
      },
    });
  }

  async create(aplicativo: CreateAplicativoDTO): Promise<Aplicativo> {
    return this.prisma.aplicativo.create({
      data: aplicativo,
    });
  }

  async findById(codigo: number): Promise<Aplicativo | null> {
    return this.prisma.aplicativo.findUnique({
      where: { codigo },
    });
  }

  async findAll(): Promise<Aplicativo[]> {
    return this.prisma.aplicativo.findMany();
  }

  async patch(codigo: number, dto: PatchAplicativoDTO): Promise<Aplicativo | null> {
    return this.prisma.aplicativo.update({
      where: { codigo },
      data: { ...dto },
    });
  }
}
