import { Business } from 'src/businesses/entities/business.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  BaseEntity,
} from 'typeorm';

@Entity()
export class SocialMedia extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column()
  type: string;

  @ManyToOne(() => Business, (business) => business.socialMedias)
  business: Business;
}
