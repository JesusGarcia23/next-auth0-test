import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBusinessCategoryDto } from './dto/create-business-category.dto';
import { UpdateBusinessCategoryDto } from './dto/update-business-category.dto';
import { BusinessCategory } from './entities/business-category.entity';

@Injectable()
export class BusinessCategoryService {
  constructor(
    @InjectRepository(BusinessCategory)
    private categoryRepository: Repository<BusinessCategory>,
  ) {}
  async create(createBusinessCategoryDto: CreateBusinessCategoryDto) {
    const category = await this.categoryRepository
      .create({
        name: createBusinessCategoryDto.name,
      })
      .save();

    return category;
  }

  findAll() {
    return `This action returns all businessCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} businessCategory`;
  }

  update(id: number, updateBusinessCategoryDto: UpdateBusinessCategoryDto) {
    return `This action updates a #${id} businessCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} businessCategory`;
  }
}
