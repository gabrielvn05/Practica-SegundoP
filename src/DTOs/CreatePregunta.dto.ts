import { IsString } from 'class-validator';

export class CreatePreguntaDto {
  @IsString()
  Pregunta: string;

  @IsString()
  Categoria: string;

  @IsString()
  Respuesta_correcta: string;
}
