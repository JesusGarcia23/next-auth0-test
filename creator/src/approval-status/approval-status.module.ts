import { Module } from '@nestjs/common';
import { ApprovalStatusService } from './approval-status.service';
import { ApprovalStatusController } from './approval-status.controller';

@Module({
  controllers: [ApprovalStatusController],
  providers: [ApprovalStatusService]
})
export class ApprovalStatusModule {}
