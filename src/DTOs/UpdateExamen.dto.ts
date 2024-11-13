import { IsString, IsOptional } from 'class-validator';

export class UpdateExamenDto {
  @IsString()
  @IsOptional()
  Descripcion?: string;

  @IsString()
  @IsOptional()
  ID?: Number;
}
