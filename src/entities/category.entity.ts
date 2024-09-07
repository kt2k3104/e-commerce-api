import { ApiResponseProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany } from 'typeorm';
import { CommonEntity } from './common.entity';
import { Productline } from './productline.entity';
import { Option } from './option.entity';

@Entity('categories')
export class Category extends CommonEntity {
  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: true })
  name: string;

  @OneToMany(() => Productline, (productline) => productline.category)
  productlines: Productline[];
  @OneToMany(() => Option, (option) => option.category)
  options: Option[];
}
