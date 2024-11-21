import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateExamenInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  Descripcion: string;
}
