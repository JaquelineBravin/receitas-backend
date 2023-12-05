import { IsString } from 'class-validator';

export class CreateReceitaDto {
  @IsString()
  modoFazer: string;

  @IsString()
  duracao: string;

  @IsString()
  serve: string;
}
