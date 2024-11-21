import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUsuarioInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  Nombre: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  Estado: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  Clave: string;
}
