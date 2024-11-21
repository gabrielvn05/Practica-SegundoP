import { InputType, PartialType, Field, Int } from '@nestjs/graphql';
import { CreateExamenInput } from './create-examen.input';

@InputType()
export class UpdateExamenInput extends PartialType(CreateExamenInput) {
  @Field(() => Int)
  ID: number;
}
