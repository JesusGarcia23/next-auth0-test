import { Injectable } from '@nestjs/common';
import { CreateCreatorCategoryDto } from './dto/create-creator-category.dto';
import { UpdateCreatorCategoryDto } from './dto/update-creator-category.dto';

@Injectable()
export class CreatorCategoryService {
  create(createCreatorCategoryDto: CreateCreatorCategoryDto) {
    return 'This action adds a new creatorCategory';
  }

  findAll() {
    return `This action returns all creatorCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} creatorCategory`;
  }

  update(id: number, updateCreatorCategoryDto: UpdateCreatorCategoryDto) {
    return `This action updates a #${id} creatorCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} creatorCategory`;
  }
}
