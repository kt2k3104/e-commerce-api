import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CommonEntity } from './common.entity';
import { ApiResponseProperty } from '@nestjs/swagger';
import { Productline } from './productline.entity';

@Entity({ name: 'productline_images' })
export class ProductlineImage extends CommonEntity {
  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: false })
  productline_id: number;

  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: false })
  image_url: string;

  @ManyToOne(
    () => Productline,
    (productline) => productline.productlineImages,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'productline_id' })
  productline: Productline;
}
