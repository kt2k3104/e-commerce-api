import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CommonEntity } from './common.entity';
import { ApiResponseProperty } from '@nestjs/swagger';
import { User } from './user.entity';
import { Order } from './order.entity';

@Entity({ name: 'addresses' })
export class Address extends CommonEntity {
  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: false })
  province_name: string;

  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: false })
  province_code: number;

  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: false })
  district_name: string;

  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: false })
  district_code: number;

  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: false })
  ward_name: string;

  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: false })
  ward_code: number;

  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: false })
  user_id: number;

  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: false })
  order_id: number;

  @ManyToOne(() => User, (user) => user.addresses, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Order, (order) => order.addresses, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'order_id' })
  order: Order;
}
