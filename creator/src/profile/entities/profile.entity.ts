import { Creator } from 'src/creators/entities/creator.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Creator, (creator) => creator.profile)
  creatorId: Creator;

  @Column()
  bio: string;

  @Column()
  followersCount: number;

  @Column()
  engagementRate: number;

  @Column()
  profilePicture: string;
}
