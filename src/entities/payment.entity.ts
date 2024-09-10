import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CommonEntity } from './common.entity';
import { ApiResponseProperty } from '@nestjs/swagger';
import { Order } from './order.entity';
import { PaymentMethod } from './payment-method.entity';

@Entity({ name: 'payments' })
export class Payment extends CommonEntity {
  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: false })
  amount: number;

  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: false })
  status: string;

  @ManyToOne(() => Order, (order) => order.payments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @ManyToOne(() => PaymentMethod, (paymentMethod) => paymentMethod.payments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'payment_method_id' })
  paymentMethod: PaymentMethod;
}
