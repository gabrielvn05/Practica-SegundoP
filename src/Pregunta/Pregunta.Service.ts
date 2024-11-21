import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pregunta } from './Entities/pregunta.entity';
import { CreatePreguntaInput } from './DTO/create-pregunta.input';
import { UpdatePreguntaInput } from './DTO/update-pregunta.input';

@Injectable()
export class PreguntaService {
  constructor(
    @InjectRepository(Pregunta)
    private preguntaRepository: Repository<Pregunta>,
  ) {}

  create(createPreguntaInput: CreatePreguntaInput): Promise<Pregunta> {
    const pregunta = this.preguntaRepository.create(createPreguntaInput);
    return this.preguntaRepository.save(pregunta);
  }

  findAll(): Promise<Pregunta[]> {
    return this.preguntaRepository.find({ relations: ['insumosEvaluacion'] });
  }

  findOne(id: number): Promise<Pregunta> {
    return this.preguntaRepository.findOne({
      where: { ID: id },
      relations: ['insumosEvaluacion'],
    });
  }

  async update(id: number, updatePreguntaInput: UpdatePreguntaInput): Promise<Pregunta> {
    await this.preguntaRepository.update(id, updatePreguntaInput);
    return this.preguntaRepository.findOne({ where: { ID: id } });
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.preguntaRepository.delete(id);
    return result.affected > 0;
  }
}
