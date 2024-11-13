import { Repository } from 'typeorm';
import { Usuario } from '../entity/UsuarioEntity';
import { AppDataSource } from '../data-source';

export class UsuarioRepository {
  private repository: Repository<Usuario>;

  constructor() {
    this.repository = AppDataSource.getRepository(Usuario);
  }

  async create(usuario: Usuario): Promise<Usuario> {
    return await this.repository.save(usuario);
  }

  async findAll(): Promise<Usuario[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<Usuario | null> {
    return await this.repository.findOneBy({ ID: id });
  }

  async update(id: number, data: Partial<Usuario>): Promise<Usuario | null> {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
