import { IsString, Length, IsOptional, IsIn } from 'class-validator';

export class UpdateUsuarioDto {
  @IsString()
  @IsOptional()
  @Length(3, 50)
  Nombre?: string;

  @IsString()
  @IsOptional()
  Clave?: string;

  @IsString()
  @IsOptional()
  @IsIn(['activo', 'inactivo'])
  Estado?: string;
}
