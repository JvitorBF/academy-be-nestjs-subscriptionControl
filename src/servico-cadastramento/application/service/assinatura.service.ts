import { Inject, Injectable } from '@nestjs/common';
import { Assinatura } from '@prisma/client';
import { AssinaturaRepositoryInterface } from 'src/servico-cadastramento/domain/interfaces/repository/assinatura.repository.interface';
import { AssinaturaServiceInterface } from 'src/servico-cadastramento/domain/interfaces/service/assinatura.service.interface';
import { CreateAssinaturaDTO } from 'src/servico-cadastramento/interface/dtos/assinatura.dto';

@Injectable()
export class AssinaturaService implements AssinaturaServiceInterface {
  constructor(
    @Inject('AssinaturaRepositoryInterface')
    private readonly assinaturaRepository: AssinaturaRepositoryInterface,
  ) {}

  async create(dto: CreateAssinaturaDTO): Promise<Assinatura> {
    return this.assinaturaRepository.create(dto);
  }

  async findByCli(codCli: number): Promise<Assinatura[]> {
    return this.assinaturaRepository.findByCliente(codCli);
  }

  async findByApp(codApp: number): Promise<Assinatura[]> {
    return this.assinaturaRepository.findByAplicativo(codApp);
  }

  async findByType(tipo: string): Promise<Assinatura[]> {
    let assinaturas = await this.assinaturaRepository.findAll();
    let dataAtual = new Date();

    // Verifica o tipo e chama o método apropriado
    switch (tipo) {
      case 'TODAS':
        return assinaturas;
      case 'ATIVAS':
        return assinaturas.filter(
          (assinatura) => assinatura.fimVigencia > dataAtual,
        );
      case 'CANCELADAS':
        return assinaturas.filter(
          (assinatura) => assinatura.fimVigencia <= dataAtual,
        );
      default:
        throw new Error('Tipo de assinatura inválido');
    }
  }

  async delete(codigo: number): Promise<Assinatura> {
    return this.assinaturaRepository.delete(codigo);
  }
}
