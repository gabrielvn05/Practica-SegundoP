import { Request, Response } from 'express';
import { UsuarioRepository } from '../Repository/UsuarioRepository';
import { CreateUsuarioDto } from '../DTOs/CreateUsuario.dto';
import { UpdateUsuarioDto } from '../DTOs/UpdateUsuario.dto';
import { Usuario } from '../entity/UsuarioEntity';

export class UsuarioController {
  private repository: UsuarioRepository;

  constructor() {
    this.repository = new UsuarioRepository();
  }

  async create(req: Request, res: Response) {
    const usuarioDto = req.body as CreateUsuarioDto;
    const usuario = new Usuario();
    usuario.Nombre = usuarioDto.Nombre;
    usuario.Clave = usuarioDto.Clave;
    usuario.Estado = usuarioDto.Estado;

    await usuario.hashPassword();

    const nuevoUsuario = await this.repository.create(usuario);
    res.status(201).json(nuevoUsuario);
  }

  async findAll(req: Request, res: Response) {
    const usuarios = await this.repository.findAll();
    res.status(200).json(usuarios);
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    const usuarioDto = req.body as UpdateUsuarioDto;

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const usuario = await this.repository.findById(id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    usuario.Nombre = usuarioDto.Nombre || usuario.Nombre;
    usuario.Clave = usuarioDto.Clave || usuario.Clave;
    usuario.Estado = usuarioDto.Estado || usuario.Estado;

    if (usuarioDto.Clave) {
      await usuario.hashPassword();
    }

    const usuarioActualizado = await this.repository.update(id, {
      Nombre: usuario.Nombre,
      Clave: usuario.Clave,
      Estado: usuario.Estado
    });

    res.status(200).json(usuarioActualizado);
  }

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const usuario = await this.repository.findById(id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    await this.repository.delete(id);
    res.status(200).json({ message: 'Usuario eliminado correctamente' });
  }
}
