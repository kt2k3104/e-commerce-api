import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class ForgotPasswordReq {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
