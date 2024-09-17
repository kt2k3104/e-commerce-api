import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OptionItem } from 'src/entities/option-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OptionItemRepository extends Repository<OptionItem> {
  constructor(
    @InjectRepository(OptionItem)
    private optionItemRepository: Repository<OptionItem>,
  ) {
    super(
      optionItemRepository.target,
      optionItemRepository.manager,
      optionItemRepository.queryRunner,
    );
  }
}
