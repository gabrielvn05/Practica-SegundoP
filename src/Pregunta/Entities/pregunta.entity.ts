import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { InsumoEvaluacion } from '../../insumo-evaluacion/entities/insumo-evaluacion.entity';

@ObjectType() 
@Entity()
export class Pregunta {
  @Field(() => Int) 
  @PrimaryGeneratedColumn()
  ID: number;

  @Field() 
  @Column()
  Pregunta: string;

  @Field() 
  @Column()
  Categoria: string;

  @Field() 
  @Column()
  Respuesta_correcta: string;

  @Field(() => [InsumoEvaluacion], { nullable: true }) 
  @OneToMany(() => InsumoEvaluacion, (insumo) => insumo.ID_Pregunta)
  insumosEvaluacion: InsumoEvaluacion[];
}
