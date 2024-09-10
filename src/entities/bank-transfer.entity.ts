import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiResponseProperty } from '@nestjs/swagger';
import { PaymentMethod } from './payment-method.entity';

@Entity({ name: 'bank_transfers' })
export class BankTransfer {
  @ApiResponseProperty({ type: Number })
  @PrimaryColumn({ type: 'int' })
  id: number;

  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: false })
  bank_name: string;

  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: false })
  qr_code_url: string;

  @ApiResponseProperty({ type: Date })
  @CreateDateColumn({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @ApiResponseProperty({ type: Date })
  @UpdateDateColumn({
    type: 'timestamp with time zone',
    nullable: true,
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at?: Date;

  @ManyToOne(
    () => PaymentMethod,
    (paymentMethod) => paymentMethod.bankTransfers,
  )
  paymentMethod: PaymentMethod;
}
