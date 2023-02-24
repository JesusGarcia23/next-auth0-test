import { Module } from '@nestjs/common';
import { DeliverableTypeService } from './deliverable-type.service';
import { DeliverableTypeController } from './deliverable-type.controller';

@Module({
  controllers: [DeliverableTypeController],
  providers: [DeliverableTypeService]
})
export class DeliverableTypeModule {}
