import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'src/entities/address.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AddressRepository extends Repository<Address> {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {
    super(
      addressRepository.target,
      addressRepository.manager,
      addressRepository.queryRunner,
    );
  }
}
