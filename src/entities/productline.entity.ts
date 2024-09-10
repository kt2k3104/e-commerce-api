import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CommonEntity } from './common.entity';
import { ApiResponseProperty } from '@nestjs/swagger';
import { Category } from './category.entity';
import { ProductlineOption } from './productline-option.entity';
import { ProductVariant } from './product-variant.entity';
import { ProductlineImage } from './productline-image.entity';

@Entity('productlines')
export class Productline extends CommonEntity {
  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: true })
  name: string;
  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: true })
  description: string;
  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: true })
  quantity: number;
  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: true })
  discount_percentage: number;
  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: true })
  brand: string;
  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: true })
  sold: number;
  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: true })
  detailed_information: string;

  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: true })
  category_id: number;

  @ManyToOne(() => Category, (category) => category.productlines, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @OneToMany(
    () => ProductlineOption,
    (productlineOption) => productlineOption.productline,
  )
  productlineOptions: ProductlineOption[];

  @OneToMany(
    () => ProductVariant,
    (productVariant) => productVariant.productline,
  )
  productVariants: ProductVariant[];

  @OneToMany(
    () => ProductlineImage,
    (productlineImage) => productlineImage.productline,
  )
  productlineImages: ProductlineImage[];
}
