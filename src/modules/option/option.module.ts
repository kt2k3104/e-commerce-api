import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionController } from './option.controller';
import { OptionService } from './option.service';
import { OptionRepository } from 'src/repositories/option.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Option])],
  controllers: [OptionController],
  providers: [OptionService, OptionRepository],
})
export class OptionModule {}
