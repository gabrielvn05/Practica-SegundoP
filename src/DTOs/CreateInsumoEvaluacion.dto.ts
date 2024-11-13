import { IsNumber, IsNotEmpty } from 'class-validator';
import { CreatePreguntaDto } from './CreatePregunta.dto';
import { CreateExamenDto } from './CreateExamen.dto';

export class CreateInsumoDto {
  @IsNumber()
  @IsNotEmpty()
  ID_Pregunta!: CreatePreguntaDto[];

  @IsNumber()
  @IsNotEmpty()
  ID_Examen!: CreateExamenDto[];

  @IsNumber()
  @IsNotEmpty()
  Valor: number = 0;
}
