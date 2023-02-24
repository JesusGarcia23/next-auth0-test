import { Module } from '@nestjs/common';
import { ApprovalStatusService } from './approval-status.service';
import { ApprovalStatusController } from './approval-status.controller';
import { ApprovalStatus } from './entities/approval-status.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApprovalStatus])],
  controllers: [ApprovalStatusController],
  providers: [ApprovalStatusService],
  exports: [ApprovalStatusService],
})
export class ApprovalStatusModule {}
