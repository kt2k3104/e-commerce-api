import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductlineImage } from 'src/entities/productline-image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductlineImageRepository extends Repository<ProductlineImage> {
  constructor(
    @InjectRepository(ProductlineImage)
    private productlineImageRepository: Repository<ProductlineImage>,
  ) {
    super(
      productlineImageRepository.target,
      productlineImageRepository.manager,
      productlineImageRepository.queryRunner,
    );
  }
}
