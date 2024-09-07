import { Column, Entity, OneToOne } from 'typeorm';
import { CommonEntity } from './common.entity';
import { User } from './user.entity';
import { ApiResponseProperty } from '@nestjs/swagger';

@Entity({ name: 'carts' })
export class Cart extends CommonEntity {
  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: false })
  user_id: number;

  @OneToOne(() => User, (user) => user.cart)
  user: User;
}
