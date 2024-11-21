import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pregunta } from './entities/pregunta.entity';
import { PreguntaService } from './Pregunta.Service';
import { PreguntaResolver } from './Pregunta.Resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Pregunta])],
  providers: [PreguntaService, PreguntaResolver],
  exports: [PreguntaService],
})
export class PreguntaModule {}
