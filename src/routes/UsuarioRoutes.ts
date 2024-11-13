import { UsuarioController } from '../controllers/UsuariosControllers';
import { Module } from '@nestjs/common';
import { UsuarioRepository } from '../Repository/UsuarioRepository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../entity/UsuarioEntity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UsuarioController],
  providers: [UsuarioRepository],
})
export class UsuarioModule {}
