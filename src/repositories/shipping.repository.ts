import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Shipping } from 'src/entities/shipping.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShippingRepository extends Repository<Shipping> {
  constructor(
    @InjectRepository(Shipping)
    private shippingRepository: Repository<Shipping>,
  ) {
    super(
      shippingRepository.target,
      shippingRepository.manager,
      shippingRepository.queryRunner,
    );
  }
}
