import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Productline } from 'src/entities/productline.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductRepository } from 'src/repositories/product.repository';
import { ProductlineRepository } from 'src/repositories/productline.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Productline])],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, ProductlineRepository],
})
export class ProductModule {}
