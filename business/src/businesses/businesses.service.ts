import { Injectable } from '@nestjs/common';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { Business } from './entities/business.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { BusinessCategory } from 'src/business-category/entities/business-category.entity';
import { SocialMedia } from 'src/social-media/entities/social-media.entity';

import {
  ApprovalStatus,
  Status,
} from 'src/approval-status/entities/approval-status.entity';
import { HttpService } from '@nestjs/axios';
import { CreateBusinessDto } from './dto/create-business.dto';

@Injectable()
export class BusinessesService {
  constructor(
    @InjectRepository(Business)
    private businessRepository: Repository<Business>,
    @InjectEntityManager() private entityManager: EntityManager,
    private httpService: HttpService,
  ) {}

  async businessRelations({
    category,
    socialMediaUrl,
    ssMediaType,
  }: Partial<CreateBusinessDto>) {
    const businessCategory = new BusinessCategory();
    businessCategory.name = category;

    const socialMedia = new SocialMedia();
    socialMedia.type = ssMediaType;
    socialMedia.url = socialMediaUrl;

    const approvalStatus = new ApprovalStatus();
    approvalStatus.status = Status.PENDING;
    const promise = await Promise.all([
      this.entityManager.save(approvalStatus),
      this.entityManager.save(businessCategory),
      this.entityManager.save(socialMedia),
    ]);
    return promise;
  }
  async create(createBusinessDto: CreateBusinessDto) {
    try {
      const {
        businessName,
        address,
        category,
        ssMediaType,
        socialMediaUrl,
        phoneNumber,
        website,
        businessEmail,
      } = createBusinessDto;
      const [ApprovalStatus, BusinessCategory, SocialMedia] =
        await this.businessRelations({
          category,
          ssMediaType,
          socialMediaUrl,
        });

      const business = new Business();

      business.businessName = businessName;
      business.address = address;
      const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        address,
      )}&format=json`;
      const { data } = await this.httpService.get(url).toPromise();
      const { lat, lon } = data[0];

      business.location = { type: 'Point', coordinates: [lon, lat] };
      business.businessEmail = businessEmail;
      business.category = [BusinessCategory];

      business.phoneNumber = phoneNumber;
      if (website) business.website = website;
      business.socialMedias = [SocialMedia];

      business.verified = ApprovalStatus;

      await this.entityManager.save(business);
      return business;
    } catch (err) {
      console.log(err);
    }
  }

  findAll() {
    return `This action returns all businesses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} business`;
  }

  findByAuth0Id(id: string) {
    return 'LOL Find something';
  }

  update(id: number, updateBusinessDto: UpdateBusinessDto) {
    return `This action updates a #${id} business`;
  }

  remove(id: number) {
    return `This action removes a #${id} business`;
  }
}
