import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeliverableTypeService } from './deliverable-type.service';
import { CreateDeliverableTypeDto } from './dto/create-deliverable-type.dto';
import { UpdateDeliverableTypeDto } from './dto/update-deliverable-type.dto';

@Controller('deliverable-type')
export class DeliverableTypeController {
  constructor(private readonly deliverableTypeService: DeliverableTypeService) {}

  @Post()
  create(@Body() createDeliverableTypeDto: CreateDeliverableTypeDto) {
    return this.deliverableTypeService.create(createDeliverableTypeDto);
  }

  @Get()
  findAll() {
    return this.deliverableTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliverableTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeliverableTypeDto: UpdateDeliverableTypeDto) {
    return this.deliverableTypeService.update(+id, updateDeliverableTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliverableTypeService.remove(+id);
  }
}
