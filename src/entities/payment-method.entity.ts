import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CommonEntity } from './common.entity';
import { ApiResponseProperty } from '@nestjs/swagger';
import { User } from './user.entity';
import { Payment } from './payment.entity';
import { BankTransfer } from './bank-transfer.entity';
import { CreditCart } from './credit-cart.entity';
import { Atm } from './atm.entity';

@Entity({ name: 'payment_methods' })
export class PaymentMethod extends CommonEntity {
  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: false })
  user_id: number;

  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: false })
  method_type: string;

  @ManyToOne(() => User, (user) => user.payment_methods, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Payment, (payment) => payment.paymentMethod)
  payments: Payment[];

  @OneToMany(() => BankTransfer, (bankTransfer) => bankTransfer.paymentMethod)
  bankTransfers?: BankTransfer[];

  @OneToMany(() => CreditCart, (creditCart) => creditCart.paymentMethod)
  creditCarts?: CreditCart[];

  @OneToMany(() => Atm, (atm) => atm.paymentMethod)
  atms?: Atm[];
}
