import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSocialMediaDto } from './dto/create-social-media.dto';
import { UpdateSocialMediaDto } from './dto/update-social-media.dto';
import { SocialMedia } from './entities/social-media.entity';

@Injectable()
export class SocialMediaService {
  constructor(
    @InjectRepository(SocialMedia)
    private socialMediaRepository: Repository<SocialMedia>,
  ) {}
  async create(createSocialMediaDto: CreateSocialMediaDto) {
    const smd = await this.socialMediaRepository
      .create({
        type: createSocialMediaDto.type,
        url: createSocialMediaDto.url,
      })
      .save();
    return smd;
  }

  findAll() {
    return `This action returns all socialMedia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} socialMedia`;
  }

  update(id: number, updateSocialMediaDto: UpdateSocialMediaDto) {
    return `This action updates a #${id} socialMedia`;
  }

  remove(id: number) {
    return `This action removes a #${id} socialMedia`;
  }
}
