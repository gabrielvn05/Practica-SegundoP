import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

@ObjectType() // Decorador para GraphQL
@Entity() // Decorador para TypeORM
export class Usuario {
  @Field(() => Int) // Exponer el ID como Int en GraphQL
  @PrimaryGeneratedColumn()
  ID: number;

  @Field() // Exponer el Nombre como String en GraphQL
  @Column()
  Nombre: string;

  @Field() // Exponer el Estado como String en GraphQL
  @Column()
  Estado: string;

  @Field({ nullable: true }) // No exponer directamente la clave por seguridad
  @Column()
  Clave: string;

  @BeforeInsert()
  async hashPassword() {
    this.Clave = await bcrypt.hash(this.Clave, 10);
  }
}
