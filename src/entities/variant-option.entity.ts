import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CommonEntity } from './common.entity';
import { OptionItem } from './option-item.entity';
import { ProductVariant } from './product-variant.entity';
import { ApiResponseProperty } from '@nestjs/swagger';

@Entity({ name: 'variant_options' })
export class VariantOption extends CommonEntity {
  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: false })
  option_item_id: number;

  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: false })
  variant_id: number;

  @ManyToOne(() => OptionItem, (optionItem) => optionItem.variantOptions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'option_item_id' })
  optionItem: OptionItem;

  @ManyToOne(() => ProductVariant, (variant) => variant.variantOptions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'variant_id' })
  productVariant: ProductVariant;
}
