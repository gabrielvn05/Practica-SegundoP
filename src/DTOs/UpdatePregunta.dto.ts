import { IsString, IsOptional } from 'class-validator';

export class UpdatePreguntaDto {
  @IsString()
  @IsOptional()
  Pregunta?: string;

  @IsString()
  @IsOptional()
  Categoria?: string;

  @IsString()
  @IsOptional()
  Respuesta_correcta?: string;
}
