import { Business } from 'src/businesses/entities/business.entity';
import { DealType } from 'src/deal-type/entities/deal-type.entity';
import { Requirement } from 'src/requirements/entities/requirement.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Deal extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Business, (business) => business.id)
  businessId: Business;

  @OneToOne(() => Requirement, (requirement) => requirement.dealId)
  @JoinColumn()
  requirements: Requirement;

  @OneToOne(() => DealType, (dealType) => dealType.dealId)
  dealType: DealType;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  creatorSelected: string;

  @Column({ type: 'text', array: true, nullable: true })
  creatorsApplied: string[];

  @Column({ nullable: true })
  pin: string;
}
