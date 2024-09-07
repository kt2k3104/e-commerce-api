import { Column, Entity, ManyToMany } from 'typeorm';
import { CommonEntity } from './common.entity';
import { ApiResponseProperty } from '@nestjs/swagger';
import { UserRole } from 'src/common/enums/user.enum';
import { User } from './user.entity';

@Entity('roles')
export class Roles extends CommonEntity {
  @ApiResponseProperty({ type: String, enum: UserRole })
  @Column({ nullable: false, enum: UserRole, type: 'enum' })
  role_name: UserRole;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}
