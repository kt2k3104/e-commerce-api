import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CommonEntity } from './common.entity';
import { Option } from './option.entity';
import { Productline } from './productline.entity';
import { ApiResponseProperty } from '@nestjs/swagger';

@Entity({ name: 'product_options' })
export class ProductlineOption extends CommonEntity {
  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: false })
  option_id: number;

  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: false })
  productline_id: number;

  @ManyToOne(() => Option, (option) => option.productlineOptions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'option_id' })
  option: Option;

  @ManyToOne(
    () => Productline,
    (productline) => productline.productlineOptions,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'productline_id' })
  productline: Productline;
}
