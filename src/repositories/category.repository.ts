import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entities/category.entity';

@Injectable()
export class CategoryRepository extends Repository<Category> {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {
    super(
      categoryRepository.target,
      categoryRepository.manager,
      categoryRepository.queryRunner,
    );
  }
}
