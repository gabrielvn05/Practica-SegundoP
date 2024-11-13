import { Repository } from 'typeorm';
import { Pregunta } from '../entity/PreguntaEntity';
import { AppDataSource } from '../data-source';

export class PreguntaRepository {
  private repository: Repository<Pregunta>;

  constructor() {
    this.repository = AppDataSource.getRepository(Pregunta);
  }

  async create(pregunta: Pregunta): Promise<Pregunta> {
    return await this.repository.save(pregunta);
  }

  async findAll(): Promise<Pregunta[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<Pregunta | null> {
    return await this.repository.findOneBy({ ID: id });
  }

  async update(id: number, data: Partial<Pregunta>): Promise<Pregunta | null> {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
