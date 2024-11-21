import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateInsumoEvaluacionInput {
  @Field()
  Nombre: string;

  @Field(() => Int)
  ID_Pregunta: number;

  @Field(() => Int)
  ID_Examen: number;

  @Field(() => Int)
  Valor: number;
}
