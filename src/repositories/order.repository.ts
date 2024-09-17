import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderRepository extends Repository<Order> {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {
    super(
      orderRepository.target,
      orderRepository.manager,
      orderRepository.queryRunner,
    );
  }
}
