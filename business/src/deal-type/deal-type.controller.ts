import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DealTypeService } from './deal-type.service';
import { CreateDealTypeDto } from './dto/create-deal-type.dto';
import { UpdateDealTypeDto } from './dto/update-deal-type.dto';

@Controller('deal-type')
export class DealTypeController {
  constructor(private readonly dealTypeService: DealTypeService) {}

  @Post()
  create(@Body() createDealTypeDto: CreateDealTypeDto) {
    return this.dealTypeService.create(createDealTypeDto);
  }

  @Get()
  findAll() {
    return this.dealTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dealTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDealTypeDto: UpdateDealTypeDto) {
    return this.dealTypeService.update(+id, updateDealTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dealTypeService.remove(+id);
  }
}
