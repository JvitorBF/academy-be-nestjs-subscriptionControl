import { IsNotEmpty, IsInt, IsPositive, IsDateString } from 'class-validator';

export class CreatePagamentoDTO {
  @IsInt()
  @IsNotEmpty()
  codAssinatura: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  valorPago: number;
  
  @IsDateString({ strict: true })
  @IsNotEmpty()
  dataPagamento: Date;
}
