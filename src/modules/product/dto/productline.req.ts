import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ProductlineReq {
  @ApiProperty({ type: String, required: true })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: String, required: true })
  @IsNotEmpty()
  description: string;

  @ApiProperty({ type: Number, required: true })
  @IsNotEmpty()
  quantity: number;

  @ApiProperty({ type: Number, required: true })
  @IsNotEmpty()
  number_of_reviews: number;

  @ApiProperty({ type: Number, required: true })
  @IsNotEmpty()
  discount_percentage: number;

  @ApiProperty({ type: String, required: true })
  @IsNotEmpty()
  brand: string;

  @ApiProperty({ type: Number, required: true })
  @IsNotEmpty()
  sold: number;

  @ApiProperty({ type: String, required: true })
  @IsNotEmpty()
  detailed_information: string;

  @ApiProperty({ type: Number, required: true })
  @IsNotEmpty()
  category_id: number;
}
