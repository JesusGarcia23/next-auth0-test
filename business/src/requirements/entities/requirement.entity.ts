import { Deal } from 'src/deal/entities/deal.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Requirement extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Deal, (deal) => deal.requirements)
  dealId: Deal;

  @Column()
  deliverableDetails: string;

  @Column({ type: 'text', array: true, nullable: true })
  preferredNiche: string[];

  @Column({ type: 'text', array: true, nullable: true })
  deliverableTypes: string[];
}
