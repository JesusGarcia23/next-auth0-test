import { Creator } from 'src/creators/entities/creator.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  BaseEntity,
} from 'typeorm';

export enum Status {
  APPROVED = 'approved',
  DENIED = 'denied',
  PENDING = 'pending',
}

@Entity()
export class ApprovalStatus extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.PENDING,
  })
  status: Status;

  @Column({ nullable: true })
  reason: string;

  @OneToOne(() => Creator, (creator) => creator.verified)
  creatorId: Creator;
}
