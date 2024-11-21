import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './Entities/usuario.entity';
import { CreateUsuarioInput } from './DTO/create-usuario.input';
import { UpdateUsuarioInput } from './DTO/update-usuario.input';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioInput: CreateUsuarioInput): Promise<Usuario> {
    const usuario = this.usuarioRepository.create(createUsuarioInput);
    return this.usuarioRepository.save(usuario);
  }

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  findOne(id: number): Promise<Usuario> {
    return this.usuarioRepository.findOne({ where: { ID: id } });
  }

  async update(id: number, updateUsuarioInput: UpdateUsuarioInput): Promise<Usuario> {
    await this.usuarioRepository.update(id, updateUsuarioInput);
    return this.usuarioRepository.findOne({ where: { ID: id } });
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.usuarioRepository.delete(id);
    return result.affected > 0;
  }
}
