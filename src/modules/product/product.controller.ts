import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
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
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  // Category
  @ApiResponse({
    status: HttpStatus.OK,
  })
  @ApiOperation({
    operationId: 'get-all-categories',
    summary: 'Get all categories',
    description: 'Get all categories',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('categories')
  async getAllCategories() {
    return await this.productService.getAllCategories();
  }

  @ApiResponse({
    status: HttpStatus.OK,
  })
  @ApiOperation({
    operationId: 'get-category-by-id',
    summary: 'Get category by id',
    description: 'Get category by id',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('category/:id')
  async getCategoryById(@Param('id') id: number) {
    return await this.productService.getCategoryById(id);
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
  })
  @ApiOperation({
    operationId: 'add-category',
    summary: 'Add category',
    description: 'Add category',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('add-category')
  async addCategory(@Query() data: any) {
    return await this.productService.createCategory(data);
  }

  @ApiResponse({
    status: HttpStatus.OK,
  })
  @ApiOperation({
    operationId: 'update-category',
    summary: 'Update category',
    description: 'Update category',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put('update-category')
  async updateCategory(
    @Query('category_id') categoryId: number,
    @Body() data: any,
  ) {
    return await this.productService.updateCategory(categoryId, data);
  }

  @ApiResponse({
    status: HttpStatus.OK,
  })
  @ApiOperation({
    operationId: 'delete-category',
    summary: 'Delete category',
    description: 'Delete category',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete('delete-category')
  async deleteCategory(@Query('category_id') categoryId: number) {
    return await this.productService.deleteCategory(categoryId);
  }

  // Option
  @ApiResponse({
    status: HttpStatus.OK,
  })
  @ApiOperation({
    operationId: 'get-all-options',
    summary: 'Get all options',
    description: 'Get all options',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('options')

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
  @Get('add-productline')
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
