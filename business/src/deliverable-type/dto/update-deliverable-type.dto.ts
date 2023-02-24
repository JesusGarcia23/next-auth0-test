import { PartialType } from '@nestjs/mapped-types';
import { CreateDeliverableTypeDto } from './create-deliverable-type.dto';

export class UpdateDeliverableTypeDto extends PartialType(CreateDeliverableTypeDto) {}
