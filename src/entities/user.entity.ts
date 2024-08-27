import { Column, Entity, OneToOne } from 'typeorm';
import { CommonEntity } from './common.entity';
import { ApiResponseProperty } from '@nestjs/swagger';
import { UserLoginInformation } from './user-login-infomations.entity';

@Entity('users')
export class User extends CommonEntity {
  @ApiResponseProperty({ type: String })
  @Column({ nullable: false, length: 50 })
  full_name: string;

  @ApiResponseProperty({ type: String })
  @Column({ nullable: false, length: 50 })
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

  @ApiResponseProperty({ type: Number, deprecated: true })
  @Column({ nullable: false, length: 6, select: false })
  pin: number;

  @ApiResponseProperty({ type: String })
  @Column()
  facebook_link: string;

  @ApiResponseProperty({ type: String })
  @Column()
  role: string;

  // Define relations
  @OneToOne(() => UserLoginInformation, (userInfo) => userInfo.user)
  userLoginInfomation: UserLoginInformation;
}
