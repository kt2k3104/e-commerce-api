import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentMethod } from 'src/entities/payment-method.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentMethodRepository extends Repository<PaymentMethod> {
  constructor(
    @InjectRepository(PaymentMethod)
    private paymentMethodRepository: Repository<PaymentMethod>,
  ) {
    super(
      paymentMethodRepository.target,
      paymentMethodRepository.manager,
      paymentMethodRepository.queryRunner,
    );
  }
}
