import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CategoryService } from './category.service';
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
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

@ApiTags('Category')
@Controller('categorys')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
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
  @Get()
  async getAllCategories() {
    return await this.categoryService.getAllCategories();
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
  @Get('/:id')
  async getCategoryById(@Param('id') id: number) {
    return await this.categoryService.getCategoryById(id);
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
  })
  @ApiOperation({
    operationId: 'create-category',
    summary: 'Create category',
    description: 'Create category',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('create')
  async createCategory(@Query() data: any) {
    return await this.categoryService.createCategory(data);
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
  @Put('update')
  async updateCategory(
    @Query('category_id') categoryId: number,
    @Body() data: any,
  ) {
    return await this.categoryService.updateCategory(categoryId, data);
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
  @Delete('delete')
  async deleteCategory(@Query('category_id') categoryId: number) {
    return await this.categoryService.deleteCategory(categoryId);
  }
}
