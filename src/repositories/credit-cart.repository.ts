import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreditCart } from 'src/entities/credit-cart.entity';

@Injectable()
export class CreditCartRepository extends Repository<CreditCart> {
  constructor(
    @InjectRepository(CreditCart)
    private creditCartRepository: Repository<CreditCart>,
  ) {
    super(
      creditCartRepository.target,
      creditCartRepository.manager,
      creditCartRepository.queryRunner,
    );
  }
}
