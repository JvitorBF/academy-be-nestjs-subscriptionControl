// servico-pagamentos.controller.ts
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { CriarPagamentosUseCase } from '../../application/use-cases/criar-pagamentos.use-case';
import { CreatePagamentoDTO } from '../dtos/pagamento.dto';
import { ListarPagamentosUseCase } from 'src/servico-pagamento/application/use-cases/listar-pagamentos.use-case';
import { ListarByIdPagamentosUseCase } from 'src/servico-pagamento/application/use-cases/listarById-pagamentos.use-case';
import { Pagamento } from '@prisma/client';

@Controller('servpag')
export class ServicoPagamentosController {
  constructor(
    private readonly criarPagamentoUseCase: CriarPagamentosUseCase,
    private readonly listarPagamentosUseCase: ListarPagamentosUseCase,
    private readonly listarByIdPagamentosUseCase: ListarByIdPagamentosUseCase,
  ) {}

  @Post('pagamentos')
  async create(
    @Body(new ValidationPipe({ whitelist: true })) body: CreatePagamentoDTO,
  ): Promise<CreatePagamentoDTO> {
    const dataPagamento = new Date(body.dataPagamento);

    const dto: CreatePagamentoDTO = {
      ...body,
      dataPagamento,
    };

    return this.criarPagamentoUseCase.execute(dto);
  }

  @Get('pagamentos')
  async getAll(): Promise<Pagamento[]> {
    return this.listarPagamentosUseCase.execute();
  }

  @Get('pagamentos/:codigo')
  async getById(
    @Param('codigo', ParseIntPipe) codigo: number,
  ): Promise<Pagamento> {
    return this.listarByIdPagamentosUseCase.execute(codigo);
  }
}
