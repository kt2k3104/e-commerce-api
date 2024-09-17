import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Atm } from 'src/entities/atm.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AtmRepository extends Repository<Atm> {
  constructor(
    @InjectRepository(Atm)
    private atmRepository: Repository<Atm>,
  ) {
    super(
      atmRepository.target,
      atmRepository.manager,
      atmRepository.queryRunner,
    );
  }
}
