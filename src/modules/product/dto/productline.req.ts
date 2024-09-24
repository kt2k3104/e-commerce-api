import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ProductlineReq {
  @ApiProperty({ type: String, required: true })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: String, required: true })
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  quantity: number;
}
