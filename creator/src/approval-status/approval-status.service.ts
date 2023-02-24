import { Injectable } from '@nestjs/common';
import { CreateApprovalStatusDto } from './dto/create-approval-status.dto';
import { UpdateApprovalStatusDto } from './dto/update-approval-status.dto';

@Injectable()
export class ApprovalStatusService {
  create(createApprovalStatusDto: CreateApprovalStatusDto) {
    return 'This action adds a new approvalStatus';
  }

  findAll() {
    return `This action returns all approvalStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} approvalStatus`;
  }

  update(id: number, updateApprovalStatusDto: UpdateApprovalStatusDto) {
    return `This action updates a #${id} approvalStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} approvalStatus`;
  }
}
