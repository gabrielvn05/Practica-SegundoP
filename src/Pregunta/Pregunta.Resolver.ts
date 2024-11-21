import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PreguntaService } from './Pregunta.Service';
import { Pregunta } from './Entities/pregunta.entity';
import { CreatePreguntaInput } from './DTO/create-pregunta.input';
import { UpdatePreguntaInput } from './DTO/update-pregunta.input';

@Resolver(() => Pregunta)
export class PreguntaResolver {
  constructor(private readonly preguntaService: PreguntaService) {}

  @Query(() => [Pregunta], { name: 'getPreguntas' })
  findAll() {
    return this.preguntaService.findAll();
  }

  @Query(() => Pregunta, { name: 'getPregunta' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.preguntaService.findOne(id);
  }

  @Mutation(() => Pregunta)
  createPregunta(@Args('createPreguntaInput') createPreguntaInput: CreatePreguntaInput) {
    return this.preguntaService.create(createPreguntaInput);
  }

  @Mutation(() => Pregunta)
  updatePregunta(@Args('updatePreguntaInput') updatePreguntaInput: UpdatePreguntaInput) {
    return this.preguntaService.update(updatePreguntaInput.ID, updatePreguntaInput);
  }

  @Mutation(() => Boolean)
  deletePregunta(@Args('id', { type: () => Number }) id: number) {
    return this.preguntaService.remove(id);
  }
}
