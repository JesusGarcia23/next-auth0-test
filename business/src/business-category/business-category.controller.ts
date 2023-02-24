import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BusinessCategoryService } from './business-category.service';
import { CreateBusinessCategoryDto } from './dto/create-business-category.dto';
import { UpdateBusinessCategoryDto } from './dto/update-business-category.dto';

@Controller('category')
export class BusinessCategoryController {
  constructor(
    private readonly businessCategoryService: BusinessCategoryService,
  ) {}

  @Post('create')
  create(@Body() createBusinessCategoryDto: CreateBusinessCategoryDto) {
    return this.businessCategoryService.create(createBusinessCategoryDto);
  }

  @Get()
  findAll() {
    return this.businessCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBusinessCategoryDto: UpdateBusinessCategoryDto,
  ) {
    return this.businessCategoryService.update(+id, updateBusinessCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessCategoryService.remove(+id);
  }
}
