import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from 'src/entities/cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartRepository extends Repository<Cart> {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
  ) {
    super(
      cartRepository.target,
      cartRepository.manager,
      cartRepository.queryRunner,
    );
  }
}
