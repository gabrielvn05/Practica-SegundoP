import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreatePreguntaInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  Pregunta: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  Categoria: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  Respuesta_correcta: string;
}
