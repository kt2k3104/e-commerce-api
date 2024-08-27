import { Column, Entity } from 'typeorm';
import { CommonEntity } from './common.entity';
import { ApiResponseProperty } from '@nestjs/swagger';

@Entity({ name: 'notifications' })
export class Notification extends CommonEntity {
  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: false })
  user_id: number;

  @ApiResponseProperty({ type: Number })
  @Column({ type: Number, nullable: true })
  contract_id: number;

  @ApiResponseProperty({ type: Boolean })
  @Column({ type: Boolean, nullable: false })
  is_read: boolean;

  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: false })
  content: string;

  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: false })
  title: string;
  @ApiResponseProperty({ type: String })
  @Column({ type: String, nullable: false })
  titleEEEEE: string;
}
