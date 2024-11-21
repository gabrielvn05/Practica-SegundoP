import { InputType, PartialType, Field, Int } from '@nestjs/graphql';
import { CreateInsumoEvaluacionInput } from './create-insumo-evaluacion.input';

@InputType()
export class UpdateInsumoEvaluacionInput extends PartialType(CreateInsumoEvaluacionInput) {
  @Field(() => Int, { nullable: true })
  ID_Pregunta?: number;

  @Field(() => Int, { nullable: true })
  ID_Examen?: number;
}
