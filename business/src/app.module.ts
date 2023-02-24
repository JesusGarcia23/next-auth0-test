import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import connectionOptions from '../ormconfig';
import { BusinessesModule } from './businesses/businesses.module';
import { SocialMediaModule } from './social-media/social-media.module';
import { ApprovalStatusModule } from './approval-status/approval-status.module';
import { BusinessCategoryModule } from './business-category/business-category.module';
import { ReviewModule } from './review/review.module';
import * as dotenv from 'dotenv';
import { Business } from './businesses/entities/business.entity';
import { Review } from './review/entities/review.entity';
import { SocialMedia } from './social-media/entities/social-media.entity';
import { ApprovalStatus } from './approval-status/entities/approval-status.entity';
import { BusinessCategory } from './business-category/entities/business-category.entity';
import { DealModule } from './deal/deal.module';
import { RequirementsModule } from './requirements/requirements.module';
import { NicheModule } from './niche/niche.module';
import { DeliverableTypeModule } from './deliverable-type/deliverable-type.module';
import { DealTypeModule } from './deal-type/deal-type.module';
import { AuthModule } from './auth/auth.module';
import { HealthModule } from './health/health.module';
dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(connectionOptions),
    TypeOrmModule.forFeature([
      Business,
      Review,
      SocialMedia,
      ApprovalStatus,
      BusinessCategory,
    ]),
    BusinessesModule,
    SocialMediaModule,
    ApprovalStatusModule,
    BusinessCategoryModule,
    ReviewModule,
    DealModule,
    RequirementsModule,
    NicheModule,
    DeliverableTypeModule,
    DealTypeModule,
    AuthModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
