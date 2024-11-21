import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Examen } from './Entities/examen.entity';
import { ExamenResolver } from './examen.resolver';
import { ExamenService } from './examen.service';

@Module({
  imports: [TypeOrmModule.forFeature([Examen])],
  providers: [ExamenResolver, ExamenService],
})
export class ExamenModule {}
