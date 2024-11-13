import { Request, Response } from 'express';
import { InsumoEvaluacionRepository } from '../Repository/InsumoEvaluacionRepository';
import { CreateInsumoDto } from '../DTOs/CreateInsumoEvaluacion.dto';
import { InsumoEvaluacion } from '../entity/InsumoEvaluacionEntity';

export class InsumoEvaluacionController {
  private repository: InsumoEvaluacionRepository;

  constructor() {
    this.repository = new InsumoEvaluacionRepository();
  }

  async create(req: Request, res: Response) {
    const insumoDto = req.body as CreateInsumoDto;
    const insumo = new InsumoEvaluacion();
    //insumo.ID_Pregunta = insumoDto.ID_Pregunta;
    //insumo.ID_Examen = insumoDto.ID_Examen;
    insumo.Valor = insumoDto.Valor;

    const nuevoInsumo = await this.repository.create(insumo);
    res.status(201).json(nuevoInsumo);
  }

  async findAll(req: Request, res: Response) {
    const insumos = await this.repository.findAll();
    res.status(200).json(insumos);
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    const insumoDto = req.body as CreateInsumoDto;

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const insumo = await this.repository.findById(id);
    if (!insumo) {
      return res.status(404).json({ message: 'Insumo de evaluación no encontrado' });
    }

    //insumo.ID_Pregunta = insumoDto.ID_Pregunta;
    //insumo.ID_Examen = insumoDto.ID_Examen;
    insumo.Valor = insumoDto.Valor;

    //const insumoActualizado = await this.repository.update(insumo);
    //res.status(200).json(insumoActualizado);
  }
}
