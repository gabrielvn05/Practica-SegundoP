import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Examen } from './ExamenEntity';
import { Pregunta } from './PreguntaEntity'

@Entity()
export class InsumoEvaluacion {
  @PrimaryGeneratedColumn()
  ID: number = 0;

  @ManyToOne(() => Pregunta, pregunta => pregunta.insumosEvaluacion)
  ID_Pregunta: Pregunta;

  @ManyToOne(() => Examen, examen => examen.insumosEvaluacion)
  ID_Examen: Examen;

  @Column()
  Valor: number = 0;
}
