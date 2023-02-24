import { Injectable } from '@nestjs/common';
import { CreateDealTypeDto } from './dto/create-deal-type.dto';
import { UpdateDealTypeDto } from './dto/update-deal-type.dto';

@Injectable()
export class DealTypeService {
  create(createDealTypeDto: CreateDealTypeDto) {
    return 'This action adds a new dealType';
  }

  findAll() {
    return `This action returns all dealType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dealType`;
  }

  update(id: number, updateDealTypeDto: UpdateDealTypeDto) {
    return `This action updates a #${id} dealType`;
  }

  remove(id: number) {
    return `This action removes a #${id} dealType`;
  }
}
