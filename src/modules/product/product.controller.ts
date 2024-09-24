import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ProductService } from './product.service';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

@ApiTags('Product')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // Productline
  @ApiResponse({
    status: HttpStatus.OK,
  })
  @ApiOperation({
    operationId: 'get-all-productlines-by-category',
    summary: 'Get all productlines by category',
    description: 'Get all productlines by category',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('productlines')
  async getProductlinesByCategory(@Query('category_id') categoryId: number) {
    return await this.productService.getProductlinesByCategory(categoryId);
  }

  @ApiResponse({
    status: HttpStatus.OK,
  })
  @ApiOperation({
    operationId: 'get-productline-by-id',
    summary: 'Get productline by id',
    description: 'Get productline by id',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('productline/:id')
  async getProductlineById(@Param('id') id: number) {
    return await this.productService.getProductlineById(id);
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
  })
  @ApiOperation({
    operationId: 'add-productline',
    summary: 'Add productline',
    description: 'Add productline',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('add-productline')
  async addProductline(@Query() data: any) {
    return await this.productService.addProductline(data);
  }

  @ApiResponse({
    status: HttpStatus.OK,
  })
  @ApiOperation({
    operationId: 'update-productline',
    summary: 'Update productline',
    description: 'Update productline',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put('update-productline')
  async updateProductline(
    @Query('productline_id') productlineId: number,
    @Body() data: any,
  ) {
    return await this.productService.updateProductline(productlineId, data);
  }

  @ApiResponse({
    status: HttpStatus.OK,
  })
  @ApiOperation({
    operationId: 'delete-productline',
    summary: 'Delete productline',
    description: 'Delete productline',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete('delete-productline')
  async deleteProductline(@Query('productline_id') productlineId: number) {
    return await this.productService.deleteProductline(productlineId);
  }
}
