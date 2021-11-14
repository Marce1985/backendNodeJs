import {Entity, model, property, hasMany} from '@loopback/repository';
import {Venta} from './venta.model';

@model()
export class Usuario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  identificacion: string;

  @property({
    type: 'string',
    required: true,
  })
  nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
  })
  telefono?: string;

  @property({
    type: 'string',
  })
  correo?: string;

  @property({
    type: 'string',
    required: true,
  })
  clave: string;

  @hasMany(() => Venta)
  ventas: Venta[];

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
