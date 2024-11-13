import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { InsumoEvaluacion } from '../entity/InsumoEvaluacionEntity';

@Entity()
export class Pregunta {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  Pregunta: string;

  @Column()
  Categoria: string;

  @Column()
  Respuesta_correcta: string;

  @OneToMany(() => InsumoEvaluacion, insumo => insumo.ID_Pregunta)
  insumosEvaluacion: InsumoEvaluacion[];
}
