import { InputType, PartialType, Field, Int } from '@nestjs/graphql';
import { CreatePreguntaInput } from './create-pregunta.input';

@InputType()
export class UpdatePreguntaInput extends PartialType(CreatePreguntaInput) {
  @Field(() => Int)
  ID: number;
}
