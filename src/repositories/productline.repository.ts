import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Productline } from 'src/entities/productline.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductlineRepository extends Repository<Productline> {
  constructor(
    @InjectRepository(Productline)
    private productlineRepository: Repository<Productline>,
  ) {
    super(
      productlineRepository.target,
      productlineRepository.manager,
      productlineRepository.queryRunner,
    );
  }
}
