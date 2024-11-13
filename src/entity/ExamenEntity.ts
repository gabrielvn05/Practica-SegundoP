import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { InsumoEvaluacion } from './InsumoEvaluacionEntity';

@Entity()
export class Examen {
  @PrimaryGeneratedColumn()
  ID: number = 0;

  @Column()
  Descripcion: string = "";

  @OneToMany(() => InsumoEvaluacion, (insumo) => insumo.ID_Examen)
  insumosEvaluacion: InsumoEvaluacion[] = [];
}
