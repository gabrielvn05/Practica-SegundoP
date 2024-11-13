import { Request, Response } from 'express';
import { ExamenRepository } from '../Repository/ExamenRepository';
import { CreateExamenDto } from '../DTOs/CreateExamen.dto';
import { Examen } from '../entity/ExamenEntity';

export class ExamenController {
  private repository: ExamenRepository;

  constructor() {
    this.repository = new ExamenRepository();
  }

  async create(req: Request, res: Response) {
    const examenDto = req.body as CreateExamenDto;
    const examen = new Examen();
    examen.Descripcion = examenDto.Descripcion;

    const nuevoExamen = await this.repository.create(examen);
    res.status(201).json(nuevoExamen);
  }

  async findAll(req: Request, res: Response) {
    const examenes = await this.repository.findAll();
    res.status(200).json(examenes);
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    const examenDto = req.body as CreateExamenDto;

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const examen = await this.repository.findById(id);
    if (!examen) {
      return res.status(404).json({ message: 'Examen no encontrado' });
    }

    examen.Descripcion = examenDto.Descripcion;

    const examenActualizado = await this.repository.update(id, {
        Descripcion: examenDto.Descripcion
      });
    
      if (!examenActualizado) {
        return res.status(500).json({ message: 'Error al actualizar el examen' });
      }
    
      res.status(200).json(examenActualizado);
  }
}
