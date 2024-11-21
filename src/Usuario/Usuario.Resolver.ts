import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsuarioService } from './usuario.service';
import { Usuario } from './Entities/usuario.entity';
import { CreateUsuarioInput } from './DTO/create-usuario.input';

@Resolver(() => Usuario)
export class UsuarioResolver {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Query(() => [Usuario], { name: 'getUsuarios' })
  findAll() {
    return this.usuarioService.findAll();
  }

  @Mutation(() => Usuario)
  createUsuario(@Args('createUsuarioInput') createUsuarioInput: CreateUsuarioInput) {
    return this.usuarioService.create(createUsuarioInput);
  }
}
