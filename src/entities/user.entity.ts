import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { CommonEntity } from './common.entity';
import { ApiResponseProperty } from '@nestjs/swagger';
import { UserLoginInformation } from './user-login-infomations.entity';
import { Notification } from './notification.entity';
import { Roles } from './role.entity';
import { Cart } from './cart.entity';
import { Address } from './address.entity';
import { PaymentMethod } from './payment-method.entity';
import { Shipping } from './shipping.entity';

@Entity('users')
export class User extends CommonEntity {
  @ApiResponseProperty({ type: String })
  @Column({ nullable: false, length: 100 })
  full_name: string;

  @ApiResponseProperty({ type: String })
  @Column({ nullable: false, length: 100 })
  nickname: string;

  @ApiResponseProperty({ type: String })
  @Column()
  gender: string;

  @ApiResponseProperty({ type: Date })
  @Column()
  birthday: Date;

  @ApiResponseProperty({ type: String })
  @Column({ nullable: false, length: 255 })
  email: string;

  @ApiResponseProperty({ type: String })
  @Column()
  avatar: string;

  @ApiResponseProperty({ type: String })
  @Column()
  nationality: string;

  @ApiResponseProperty({ type: String })
  @Column({ nullable: false, length: 12 })
  phone_number: string;

  @ApiResponseProperty({ type: String, deprecated: true })
  @Column({ nullable: false, length: 255, select: false })
  hash_password: string;

  @ApiResponseProperty({ type: String, deprecated: true })
  @Column({ nullable: false, length: 6, select: false })
  pin: string;

  @ApiResponseProperty({ type: String })
  @Column()
  facebook_link: string;

  @ApiResponseProperty({ type: String })
  @Column()
  role: string;

  // Define relations
  @OneToOne(() => UserLoginInformation, (userInfo) => userInfo.user)
  userLoginInfomation: UserLoginInformation;

  @OneToMany(() => Notification, (notification) => notification.user)
  notifications: Notification[];

  @ManyToMany(() => Roles, (role) => role.users)
  @JoinTable({
    name: 'user_roles',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' },
  })
  roles: Roles[];

  @OneToOne(() => Cart, (cart) => cart.user)
  cart: Cart;

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  @OneToMany(() => PaymentMethod, (paymentMethod) => paymentMethod.user)
  payment_methods: PaymentMethod[];

  @OneToMany(() => Shipping, (shipping) => shipping.user)
  shippings: Shipping[];
}
