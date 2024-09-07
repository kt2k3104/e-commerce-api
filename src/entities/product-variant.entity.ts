import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CommonEntity } from './common.entity';
import { ApiResponseProperty } from '@nestjs/swagger';
import { VariantOption } from './variant-option.entity';
import { Productline } from './productline.entity';
import { Product } from './product.entity';
import { CartItem } from './cart-item.entity';

@Entity({ name: 'product_variants' })
export class ProductVariant extends CommonEntity {
  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: false })
  productline_id: number;

  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: false })
  original_price: number;

  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: false })
  selling_price: number;

  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: false })
  stock: number;

  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: false })
  image_url: string;

  @OneToMany(
    () => VariantOption,
    (variantOption) => variantOption.productVariant,
  )
  variantOptions: VariantOption[];

  @ManyToOne(() => Productline, (productline) => productline.productVariants, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'productline_id' })
  productline: Productline;

  @OneToMany(() => CartItem, (cartItem) => cartItem.productVariant)
  cart_items: CartItem[];

  @OneToMany(() => Product, (product) => product.productVariant)
  product: Product;
}
