import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductlineOption } from 'src/entities/productline-option.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductlineOptionRepository extends Repository<ProductlineOption> {
  constructor(
    @InjectRepository(ProductlineOption)
    private productlineOptionRepository: Repository<ProductlineOption>,
  ) {
    super(
      productlineOptionRepository.target,
      productlineOptionRepository.manager,
      productlineOptionRepository.queryRunner,
    );
  }
}
