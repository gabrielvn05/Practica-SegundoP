import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InsumoEvaluacion } from './entities/insumo-evaluacion.entity';
import { Pregunta } from '../Pregunta/entities/pregunta.entity';
import { Examen } from '../Examen/entities/examen.entity';
import { CreateInsumoEvaluacionInput } from './dto/create-insumo-evaluacion.input';
import { UpdateInsumoEvaluacionInput } from './dto/update-insumo-evaluacion.input';

@Injectable()
export class InsumoEvaluacionService {
  constructor(
    @InjectRepository(InsumoEvaluacion)
    private readonly insumoRepository: Repository<InsumoEvaluacion>,

    @InjectRepository(Pregunta)
    private readonly preguntaRepository: Repository<Pregunta>,

    @InjectRepository(Examen)
    private readonly examenRepository: Repository<Examen>,
  ) {}

  async findAll(): Promise<InsumoEvaluacion[]> {
    return this.insumoRepository.find({ relations: ['ID_Pregunta', 'ID_Examen'] });
  }

  async create(createInsumoEvaluacionInput: CreateInsumoEvaluacionInput): Promise<InsumoEvaluacion> {
    const { ID_Pregunta, ID_Examen, ...rest } = createInsumoEvaluacionInput;

    const pregunta = await this.preguntaRepository.findOneBy({ ID: ID_Pregunta });
    const examen = await this.examenRepository.findOneBy({ ID: ID_Examen });

    if (!pregunta || !examen) {
      throw new Error('La pregunta o el examen no existen');
    }

    const insumo = this.insumoRepository.create({
      ...rest,
      ID_Pregunta: pregunta,
      ID_Examen: examen,
    });

    return this.insumoRepository.save(insumo);
  }

  async update(id: number, updateInsumoEvaluacionInput: UpdateInsumoEvaluacionInput): Promise<InsumoEvaluacion> {
    const { ID_Pregunta, ID_Examen, ...rest } = updateInsumoEvaluacionInput;

    const insumo = await this.insumoRepository.findOneBy({ ID: id });
    if (!insumo) {
      throw new Error('El insumo no existe');
    }

    if (ID_Pregunta) {
      const pregunta = await this.preguntaRepository.findOneBy({ ID: ID_Pregunta });
      if (!pregunta) throw new Error('La pregunta no existe');
      insumo.ID_Pregunta = pregunta;
    }

    if (ID_Examen) {
      const examen = await this.examenRepository.findOneBy({ ID: ID_Examen });
      if (!examen) throw new Error('El examen no existe');
      insumo.ID_Examen = examen;
    }

    Object.assign(insumo, rest);

    return this.insumoRepository.save(insumo);
  }
}
