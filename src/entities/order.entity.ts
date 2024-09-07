import { Column, Entity, OneToMany } from 'typeorm';
import { CommonEntity } from './common.entity';
import { ApiResponseProperty } from '@nestjs/swagger';
import { Address } from './address.entity';
import { Shipping } from './shipping.entity';

@Entity({ name: 'orders' })
export class Order extends CommonEntity {
  @ApiResponseProperty({ type: Date })
  @Column({ type: Date, nullable: false })
  date_order: Date;

  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: false })
  total_price: number;

  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: false })
  status_order: string;

  @OneToMany(() => Address, (address) => address.order)
  addresses: Address[];

  @OneToMany(() => Shipping, (shipping) => shipping.order)
  shippings: Shipping[];
}
