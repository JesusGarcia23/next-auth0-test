import { Creator } from 'src/creators/entities/creator.entity';
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

  @ManyToOne(() => Creator, (creator) => creator.reviews)
  creatorId: Creator;

  @Column()
  rate: number;

  @Column()
  comment: string;

  @Column()
  reviewer: string;
}
