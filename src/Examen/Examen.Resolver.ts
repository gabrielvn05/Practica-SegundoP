import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ExamenService } from './examen.service';
import { Examen } from './Entities/examen.entity';
import { CreateExamenInput } from './dto/create-examen.input';
import { UpdateExamenInput } from './dto/update-examen.input';

@Resolver(() => Examen)
export class ExamenResolver {
  constructor(private readonly examenService: ExamenService) {}

  @Query(() => [Examen], { name: 'getExamenes' })
  findAll() {
    return this.examenService.findAll();
  }

  @Query(() => Examen, { name: 'getExamen' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.examenService.findOne(id);
  }

  @Mutation(() => Examen)
  createExamen(@Args('createExamenInput') createExamenInput: CreateExamenInput) {
    return this.examenService.create(createExamenInput);
  }

  @Mutation(() => Examen)
  updateExamen(@Args('updateExamenInput') updateExamenInput: UpdateExamenInput) {
    return this.examenService.update(updateExamenInput.ID, updateExamenInput);
  }

  @Mutation(() => Boolean)
  deleteExamen(@Args('id', { type: () => Number }) id: number) {
    return this.examenService.remove(id);
  }
}
