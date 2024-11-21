import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { InsumoEvaluacion } from '../../insumo-evaluacion/entities/insumo-evaluacion.entity';

@ObjectType()
@Entity()
export class Examen {
  @Field(() => Int) 
  @PrimaryGeneratedColumn()
  ID: number;

  @Field() 
  @Column()
  Descripcion: string;

  @Field(() => [InsumoEvaluacion], { nullable: true }) 
  @OneToMany(() => InsumoEvaluacion, (insumo) => insumo.ID_Examen, { cascade: true })
  insumosEvaluacion: InsumoEvaluacion[];
}
