import { Business } from 'src/businesses/entities/business.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  BaseEntity,
} from 'typeorm';

@Entity()
export class BusinessCategory extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Business, (business) => business.category)
  businessId: Business;
}
