import { PartialType } from '@nestjs/mapped-types';
import { CreateDealTypeDto } from './create-deal-type.dto';

export class UpdateDealTypeDto extends PartialType(CreateDealTypeDto) {}
