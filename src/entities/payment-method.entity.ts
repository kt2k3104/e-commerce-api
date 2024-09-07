import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CommonEntity } from './common.entity';
import { ApiResponseProperty } from '@nestjs/swagger';
import { User } from './user.entity';

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
}
