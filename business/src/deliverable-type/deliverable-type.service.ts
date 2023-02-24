import { Injectable } from '@nestjs/common';
import { CreateDeliverableTypeDto } from './dto/create-deliverable-type.dto';
import { UpdateDeliverableTypeDto } from './dto/update-deliverable-type.dto';

@Injectable()
export class DeliverableTypeService {
  create(createDeliverableTypeDto: CreateDeliverableTypeDto) {
    return 'This action adds a new deliverableType';
  }

  findAll() {
    return `This action returns all deliverableType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deliverableType`;
  }

  update(id: number, updateDeliverableTypeDto: UpdateDeliverableTypeDto) {
    return `This action updates a #${id} deliverableType`;
  }

  remove(id: number) {
    return `This action removes a #${id} deliverableType`;
  }
}
