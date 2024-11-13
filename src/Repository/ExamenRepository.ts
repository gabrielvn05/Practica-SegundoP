import { Repository } from 'typeorm';
import { Examen } from '../entity/ExamenEntity';
import { AppDataSource } from '../data-source';

export class ExamenRepository {
  private repository: Repository<Examen>;

  constructor() {
    this.repository = AppDataSource.getRepository(Examen);
  }

  async create(examen: Examen): Promise<Examen> {
    return await this.repository.save(examen);
  }

  async findAll(): Promise<Examen[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<Examen | null> {
    return await this.repository.findOneBy({ ID: id });
  }

  async update(id: number, data: Partial<Examen>): Promise<Examen | null> {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
