import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateApprovalStatusDto } from './dto/create-approval-status.dto';
import { UpdateApprovalStatusDto } from './dto/update-approval-status.dto';
import { ApprovalStatus } from './entities/approval-status.entity';

@Injectable()
export class ApprovalStatusService {
  constructor(
    @InjectRepository(ApprovalStatus)
    private approvalStatusRepository: Repository<ApprovalStatus>,
  ) {}
  async create(createApprovalStatusDto: CreateApprovalStatusDto) {
    const status = await this.approvalStatusRepository
      .create({
        reason: createApprovalStatusDto.reason,
        status: createApprovalStatusDto.status,
      })
      .save();

    return status;
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
