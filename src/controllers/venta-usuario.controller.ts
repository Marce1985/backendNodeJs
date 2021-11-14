import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Venta,
  Usuario,
} from '../models';
import {VentaRepository} from '../repositories';

export class VentaUsuarioController {
  constructor(
    @repository(VentaRepository)
    public ventaRepository: VentaRepository,
  ) { }

  @get('/ventas/{id}/usuario', {
    responses: {
      '200': {
        description: 'Usuario belonging to Venta',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Usuario)},
          },
        },
      },
    },
  })
  async getUsuario(
    @param.path.string('id') id: typeof Venta.prototype.id,
  ): Promise<Usuario> {
    return this.ventaRepository.usuario(id);
  }
}
