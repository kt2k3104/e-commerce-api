import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductVariant } from 'src/entities/product-variant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductVariantRepository extends Repository<ProductVariant> {
  constructor(
    @InjectRepository(ProductVariant)
    private productVariantRepository: Repository<ProductVariant>,
  ) {
    super(
      productVariantRepository.target,
      productVariantRepository.manager,
      productVariantRepository.queryRunner,
    );
  }
}
