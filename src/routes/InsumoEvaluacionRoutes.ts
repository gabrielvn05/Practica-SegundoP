import { Module } from '@nestjs/common';
import { InsumoController } from '../controllers/InsumoEvaluacionControllers';
import { InsumoRepository } from '../Repository/InsumoEvaluacionRepository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InsumoEvaluacion } from '../entity/InsumoEvaluacionEntity';

@Module({
  imports: [TypeOrmModule.forFeature([InsumoEvaluacion])],
  controllers: [InsumoController],
  providers: [InsumoRepository],
})
export class InsumoModule {}
