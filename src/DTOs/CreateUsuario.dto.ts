import { IsString, Length, IsIn } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @Length(3, 50)
  Nombre: string = "";

  @IsString()
  Clave: string = "";

  @IsString()
  @IsIn(['activo', 'inactivo'])
  Estado: string = "";
}
