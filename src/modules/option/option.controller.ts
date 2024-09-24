import {
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { OptionService } from './option.service';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

@ApiTags('Option')
@Controller('options')
export class OptionController {
  constructor(private readonly optionService: OptionService) {}

  @ApiResponse({
    status: HttpStatus.OK,
  })
  @ApiOperation({
    operationId: 'get-all-option-by-category',
    summary: 'Get all option by category',
    description: 'Get all option by category',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('')
  async getOptionByCategory(@Query('category_id') categoryId: number) {
    return await this.optionService.getOptionByCategory(categoryId);
  }

  @ApiResponse({
    status: HttpStatus.OK,
  })
  @ApiOperation({
    operationId: 'get-option-by-id',
    summary: 'Get option by id',
    description: 'Get option by id',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async getOptionById(@Query('id') id: number) {
    return await this.optionService.getOptionById(id);
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
  })
  @ApiOperation({
    operationId: 'add-option',
    summary: 'Add option',
    description: 'Add option',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('create')
  async addOption(@Query() data: any) {
    return await this.optionService.addOption(data);
  }
}
