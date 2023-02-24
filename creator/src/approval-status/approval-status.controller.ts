import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApprovalStatusService } from './approval-status.service';
import { CreateApprovalStatusDto } from './dto/create-approval-status.dto';
import { UpdateApprovalStatusDto } from './dto/update-approval-status.dto';

@Controller('approval-status')
export class ApprovalStatusController {
  constructor(private readonly approvalStatusService: ApprovalStatusService) {}

  @Post()
  create(@Body() createApprovalStatusDto: CreateApprovalStatusDto) {
    return this.approvalStatusService.create(createApprovalStatusDto);
  }

  @Get()
  findAll() {
    return this.approvalStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.approvalStatusService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateApprovalStatusDto: UpdateApprovalStatusDto,
  ) {
    return this.approvalStatusService.update(+id, updateApprovalStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.approvalStatusService.remove(+id);
  }
}
