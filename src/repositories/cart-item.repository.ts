import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartItem } from 'src/entities/cart-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartItemRepository extends Repository<CartItem> {
  constructor(
    @InjectRepository(CartItem)
    private cartItemRepository: Repository<CartItem>,
  ) {
    super(
      cartItemRepository.target,
      cartItemRepository.manager,
      cartItemRepository.queryRunner,
    );
  }
}
