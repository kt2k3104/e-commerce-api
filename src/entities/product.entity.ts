import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CommonEntity } from './common.entity';
import { ApiResponseProperty } from '@nestjs/swagger';
import { ProductVariant } from './product-variant.entity';

@Entity({ name: 'products' })
export class Product extends CommonEntity {
  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: false })
  product_variant_id: number;

  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: false })
  made_in: string;

  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: false })
  product_code: string;

  @ManyToOne(() => ProductVariant, (productVariant) => productVariant.product)
  @JoinColumn({ name: 'product_variant_id' })
  productVariant: ProductVariant;
}
