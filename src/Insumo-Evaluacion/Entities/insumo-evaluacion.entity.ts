import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pregunta } from '../../pregunta/Entities/pregunta.entity';
import { Examen } from '../../examen/Entities/examen.entity';

@ObjectType() 
@Entity()
export class InsumoEvaluacion {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  ID: number;

  @Field(() => Pregunta) 
  @ManyToOne(() => Pregunta, (pregunta) => pregunta.insumosEvaluacion)
  ID_Pregunta: Pregunta;

  @Field(() => Examen) 
  @ManyToOne(() => Examen, (examen) => examen.insumosEvaluacion)
  ID_Examen: Examen;

  @Field()
  @Column('float')
  Valor: number;
}
