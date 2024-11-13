import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  Nombre: string;

  @Column()
  Clave: string;

  @Column()
  Estado: string;

  @BeforeInsert()
  async hashPassword() {
    this.Clave = await bcrypt.hash(this.Clave, 10);
  }
}
