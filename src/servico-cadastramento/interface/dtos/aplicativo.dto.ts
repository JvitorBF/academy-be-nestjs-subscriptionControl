import { IsNotEmpty, IsInt, IsString, IsPositive } from 'class-validator';

export class CreateAplicativoDTO {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  custoMensal: number;
}

export class PatchAplicativoDTO {
  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  custoMensal: number;
}
