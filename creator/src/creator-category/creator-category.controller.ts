import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreatorCategoryService } from './creator-category.service';
import { CreateCreatorCategoryDto } from './dto/create-creator-category.dto';
import { UpdateCreatorCategoryDto } from './dto/update-creator-category.dto';

@Controller('creator-category')
export class CreatorCategoryController {
  constructor(private readonly creatorCategoryService: CreatorCategoryService) {}

  @Post()
  create(@Body() createCreatorCategoryDto: CreateCreatorCategoryDto) {
    return this.creatorCategoryService.create(createCreatorCategoryDto);
  }

  @Get()
  findAll() {
    return this.creatorCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creatorCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCreatorCategoryDto: UpdateCreatorCategoryDto) {
    return this.creatorCategoryService.update(+id, updateCreatorCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creatorCategoryService.remove(+id);
  }
}
