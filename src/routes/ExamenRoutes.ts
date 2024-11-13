import { Module } from '@nestjs/common';
import { ExamenController } from '../controllers/ExamenControllers';
import { ExamenRepository } from '../Repository/ExamenRepository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Examen } from '../entity/ExamenEntity';

@Module({
  imports: [TypeOrmModule.forFeature([Examen])],
  controllers: [ExamenController],
  providers: [ExamenRepository],
})
export class ExamenModule {}
