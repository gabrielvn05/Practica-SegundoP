import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { InsumoEvaluacionService } from './insumo-evaluacion.service';
import { InsumoEvaluacion } from './Entities/insumo-evaluacion.entity';
import { CreateInsumoEvaluacionInput } from './dto/create-insumo-evaluacion.input';
import { UpdateInsumoEvaluacionInput } from './dto/update-insumo-evaluacion.input';

@Resolver(() => InsumoEvaluacion)
export class InsumoEvaluacionResolver {
  constructor(private readonly insumoService: InsumoEvaluacionService) {}

  @Query(() => [InsumoEvaluacion], { name: 'getInsumos' })
  findAll() {
    return this.insumoService.findAll();
  }

  @Mutation(() => InsumoEvaluacion)
  createInsumo(@Args('createInsumoInput') createInsumoInput: CreateInsumoEvaluacionInput) {
    return this.insumoService.create(createInsumoInput);
  }

  @Mutation(() => InsumoEvaluacion)
  updateInsumo(
    @Args('id', { type: () => Number }) id: number,
    @Args('updateInsumoInput') updateInsumoInput: UpdateInsumoEvaluacionInput,
  ) {
    return this.insumoService.update(id, updateInsumoInput);
  }
}
