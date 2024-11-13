import { Request, Response } from 'express';
import { PreguntaRepository } from '../Repository/PreguntaRepository';
import { CreatePreguntaDto } from '../DTOs/CreatePregunta.dto';
import { Pregunta } from '../entity/PreguntaEntity';

export class PreguntaController {
  private repository: PreguntaRepository;

  constructor() {
    this.repository = new PreguntaRepository();
  }

  async create(req: Request, res: Response) {
    const preguntaDto = req.body as CreatePreguntaDto;
    const pregunta = new Pregunta();
    pregunta.Pregunta = preguntaDto.Pregunta;
    pregunta.Categoria = preguntaDto.Categoria;
    pregunta.Respuesta_correcta = preguntaDto.Respuesta_correcta;

    const nuevaPregunta = await this.repository.create(pregunta);
    res.status(201).json(nuevaPregunta);
  }

  async findAll(req: Request, res: Response) {
    const preguntas = await this.repository.findAll();
    res.status(200).json(preguntas);
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    const preguntaDto = req.body as CreatePreguntaDto;

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const pregunta = await this.repository.findById(id);
    if (!pregunta) {
      return res.status(404).json({ message: 'Pregunta no encontrada' });
    }

    pregunta.Pregunta = preguntaDto.Pregunta;
    pregunta.Categoria = preguntaDto.Categoria;
    pregunta.Respuesta_correcta = preguntaDto.Respuesta_correcta;

    const preguntaActualizada = await this.repository.update(id, {
        Pregunta: preguntaDto.Pregunta,
        Categoria: preguntaDto.Categoria,
        Respuesta_correcta: preguntaDto.Respuesta_correcta
      });
    
      if (!preguntaActualizada) {
        return res.status(500).json({ message: 'Error al actualizar la pregunta' });
      }
    
      res.status(200).json(preguntaActualizada);
  }
}
