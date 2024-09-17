import { Repository } from 'typeorm';
import { BankTransfer } from './../entities/bank-transfer.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BankTransferRepository extends Repository<BankTransfer> {
  constructor(
    private readonly bankTransferRepository: Repository<BankTransfer>,
  ) {
    super(
      bankTransferRepository.target,
      bankTransferRepository.manager,
      bankTransferRepository.queryRunner,
    );
  }
}
