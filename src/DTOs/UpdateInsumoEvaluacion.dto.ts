import { IsNumber, IsOptional } from 'class-validator';

export class UpdateInsumoDto {
  @IsNumber()
  @IsOptional()
  Valor?: number;
}
