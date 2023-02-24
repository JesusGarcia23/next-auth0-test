import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  BaseEntity,
} from 'typeorm';
import { Business } from 'src/businesses/entities/business.entity';

export enum Status {
  APPROVED = 'approved',
  DENIED = 'denied',
  PENDING = 'pending',
}

@Entity()
export class ApprovalStatus extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.PENDING,
  })
  status: Status;

  @Column({ nullable: true })
  reason: string;

  @OneToOne(() => Business, (business) => business.verified)
  businessId: Business;
}
