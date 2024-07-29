import { Repository, EntityManager, EntityRepository } from 'typeorm';
import { Gadinho } from './gadinho.entity';

@EntityRepository(Gadinho)
export class GadinhoRepository extends Repository<Gadinho> {
  constructor(entityManager: EntityManager) {
    super();
    this.manager = entityManager;
  }
}