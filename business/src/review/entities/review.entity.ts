import { Business } from 'src/businesses/entities/business.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Review extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  rate: number;

  @Column()
  comment: string;

  @Column()
  reviewer: string;

  @ManyToOne(() => Business, (business) => business.reviews)
  business: Business;
}
