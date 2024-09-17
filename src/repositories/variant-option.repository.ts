import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VariantOption } from 'src/entities/variant-option.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VariantOptionRepository extends Repository<VariantOption> {
  constructor(
    @InjectRepository(VariantOption)
    private variantOptionRepository: Repository<VariantOption>,
  ) {
    super(
      variantOptionRepository.target,
      variantOptionRepository.manager,
      variantOptionRepository.queryRunner,
    );
  }
}
