import { IsNotEmpty, IsInt, IsDateString } from 'class-validator';

export class CreateAssinaturaDTO {
  @IsInt()
  @IsNotEmpty()
  codCli: number;

  @IsInt()
  @IsNotEmpty()
  codApp: number;

  @IsDateString({ strict: true })
  @IsNotEmpty()
  inicioVigencia: Date;

  @IsDateString({ strict: true })
  @IsNotEmpty()
  fimVigencia: Date;
}
