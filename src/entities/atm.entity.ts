import { ApiResponseProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PaymentMethod } from './payment-method.entity';

@Entity({ name: 'atms' })
export class Atm {
  @ApiResponseProperty({ type: Number })
  @PrimaryColumn({ type: 'int' })
  id: number;

  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: false })
  card_number: string;

  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: false })
  name_on_card: string;

  @ApiResponseProperty({ type: Date })
  @Column({ type: Date, nullable: false })
  release_date: Date;

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

  @ManyToOne(() => PaymentMethod, (paymentMethod) => paymentMethod.atms)
  paymentMethod: PaymentMethod;
}
