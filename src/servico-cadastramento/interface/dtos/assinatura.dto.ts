import { IsNotEmpty, IsInt, IsDateString } from 'class-validator';
import { IsBeforeDate } from '../decorator/is-before-date.decorator';

export class CreateAssinaturaDTO {
  @IsInt()
  @IsNotEmpty()
  codCli: number;

  @IsInt()
  @IsNotEmpty()
  codApp: number;

  @IsDateString({ strict: true })
  @IsNotEmpty()
  @IsBeforeDate('fimVigencia')
  inicioVigencia: Date;

  @IsDateString({ strict: true })
  @IsNotEmpty()
  fimVigencia: Date;
}
