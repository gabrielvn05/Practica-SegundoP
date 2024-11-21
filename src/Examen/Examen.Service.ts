import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Examen } from './Entities/examen.entity';
import { CreateExamenInput } from './dto/create-examen.input';
import { UpdateExamenInput } from './dto/update-examen.input';

@Injectable()
export class ExamenService {
  constructor(
    @InjectRepository(Examen)
    private examenRepository: Repository<Examen>,
  ) {}

  create(createExamenInput: CreateExamenInput): Promise<Examen> {
    const examen = this.examenRepository.create(createExamenInput);
    return this.examenRepository.save(examen);
  }

  findAll(): Promise<Examen[]> {
    return this.examenRepository.find({ relations: ['insumosEvaluacion'] });
  }

  findOne(id: number): Promise<Examen> {
    return this.examenRepository.findOne({ where: { ID: id }, relations: ['insumosEvaluacion'] });
  }

  async update(id: number, updateExamenInput: UpdateExamenInput): Promise<Examen> {
    await this.examenRepository.update(id, updateExamenInput);
    return this.examenRepository.findOne({ where: { ID: id } });
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.examenRepository.delete(id);
    return result.affected > 0;
  }
}
