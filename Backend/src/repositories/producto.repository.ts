import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoEcoSastreriaDataSource} from '../datasources';
import {Producto, ProductoRelations} from '../models';

export class ProductoRepository extends DefaultCrudRepository<
  Producto,
  typeof Producto.prototype.id,
  ProductoRelations
> {
  constructor(
    @inject('datasources.MongoEcoSastreria') dataSource: MongoEcoSastreriaDataSource,
  ) {
    super(Producto, dataSource);
  }
}
