import { IsNotEmpty, IsString, IsEmail, Length } from 'class-validator';
export class CreateClienteDTO {
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  nome: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  email: string;
}
