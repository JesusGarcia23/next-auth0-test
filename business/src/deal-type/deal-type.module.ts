import { Module } from '@nestjs/common';
import { DealTypeService } from './deal-type.service';
import { DealTypeController } from './deal-type.controller';

@Module({
  controllers: [DealTypeController],
  providers: [DealTypeService]
})
export class DealTypeModule {}
