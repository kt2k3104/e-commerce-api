import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CommonEntity } from './common.entity';
import { ApiResponseProperty } from '@nestjs/swagger';
import { Option } from './option.entity';
import { VariantOption } from './variant-option.entity';

@Entity({ name: 'option_items' })
export class OptionItem extends CommonEntity {
  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: false })
  option_id: number;

  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: false })
  value: string;

  @ManyToOne(() => Option, (option) => option.optionItems, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'option_id' })
  option: Option;

  @OneToMany(() => VariantOption, (variantOption) => variantOption.optionItem)
  variantOptions: VariantOption[];
}
