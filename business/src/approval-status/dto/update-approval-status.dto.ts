import { PartialType } from '@nestjs/mapped-types';
import { CreateApprovalStatusDto } from './create-approval-status.dto';

export class UpdateApprovalStatusDto extends PartialType(CreateApprovalStatusDto) {}
