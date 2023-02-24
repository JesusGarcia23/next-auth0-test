import { Module } from '@nestjs/common';
import { CreatorCategoryService } from './creator-category.service';
import { CreatorCategoryController } from './creator-category.controller';

@Module({
  controllers: [CreatorCategoryController],
  providers: [CreatorCategoryService]
})
export class CreatorCategoryModule {}
