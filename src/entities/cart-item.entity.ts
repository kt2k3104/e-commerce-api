import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CommonEntity } from './common.entity';
import { ApiResponseProperty } from '@nestjs/swagger';
import { ProductVariant } from './product-variant.entity';

@Entity({ name: 'cart_items' })
export class CartItem extends CommonEntity {
  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: false })
  quantity: number;

  @ApiResponseProperty({ type: Date })
  @Column({ type: Date, nullable: false })
  price_at_time: Date;

  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: false })
  product_variant_id: number;

  @ManyToOne(
    () => ProductVariant,
    (productVariant) => productVariant.cart_items,
  )
  @JoinColumn({ name: 'product_variant_id' })
  productVariant: ProductVariant;
}
