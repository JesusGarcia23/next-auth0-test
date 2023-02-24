import { PartialType } from '@nestjs/mapped-types';
import { CreateCreatorCategoryDto } from './create-creator-category.dto';

export class UpdateCreatorCategoryDto extends PartialType(CreateCreatorCategoryDto) {}
