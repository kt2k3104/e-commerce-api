import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CommonEntity } from './common.entity';
import { Category } from './category.entity';
import { ProductlineOption } from './productline-option.entity';
import { OptionItem } from './option-item.entity';
import { ApiResponseProperty } from '@nestjs/swagger';

@Entity({ name: 'options' })
export class Option extends CommonEntity {
  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: false })
  category_id: number;

  @Column({ type: String, nullable: true })
  name: string;

  @ManyToOne(() => Category, (category) => category.options, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @OneToMany(
    () => ProductlineOption,
    (productlineOption) => productlineOption.option,
  )
  productlineOptions: ProductlineOption[];

  @OneToMany(() => OptionItem, (optionItem) => optionItem.option)
  optionItems: OptionItem[];
}
