import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Option } from 'src/entities/option.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OptionRepository extends Repository<Option> {
  constructor(
    @InjectRepository(Option)
    private optionRepository: Repository<Option>,
  ) {
    super(
      optionRepository.target,
      optionRepository.manager,
      optionRepository.queryRunner,
    );
  }
}
