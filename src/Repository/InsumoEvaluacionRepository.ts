import { Repository } from 'typeorm';
import { InsumoEvaluacion } from '../entity/InsumoEvaluacionEntity';
import { AppDataSource } from '../data-source';

export class InsumoEvaluacionRepository {
  private repository: Repository<InsumoEvaluacion>;

  constructor() {
    this.repository = AppDataSource.getRepository(InsumoEvaluacion);
  }

  async create(insumo: InsumoEvaluacion): Promise<InsumoEvaluacion> {
    return await this.repository.save(insumo);
  }

  async findAll(): Promise<InsumoEvaluacion[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<InsumoEvaluacion | null> {
    return await this.repository.findOneBy({ ID: id });
  }

  async update(id: number, data: Partial<InsumoEvaluacion>): Promise<InsumoEvaluacion | null> {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
