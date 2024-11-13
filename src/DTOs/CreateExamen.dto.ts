import { IsString } from 'class-validator';

export class CreateExamenDto {
  @IsString()
  Descripcion: string = "";
}
