import { Module } from '@nestjs/common';
import { PreguntaController } from '../controllers/PreguntaControllers';
import { PreguntaRepository } from '../Repository/PreguntaRepository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pregunta } from '../entity/PreguntaEntity';

@Module({
  imports: [TypeOrmModule.forFeature([Pregunta])],
  controllers: [PreguntaController],
  providers: [PreguntaRepository],
})
export class PreguntaModule {}
