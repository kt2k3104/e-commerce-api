import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CommonEntity } from './common.entity';
import { ApiResponseProperty } from '@nestjs/swagger';
import { User } from './user.entity';
import { Order } from './order.entity';

@Entity({ name: 'shippings' })
export class Shipping extends CommonEntity {
  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: false })
  shipping_address: string;

  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: false })
  shipping_method: string;

  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: false })
  shipping_cost: string;

  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: false })
  tracking_number: string;

  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: false })
  status: string;

  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: false })
  estimated_delivery_date: string;

  @ManyToOne(() => User, (user) => user.shippings, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Order, (order) => order.shippings, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'order_id' })
  order: Order;
}
