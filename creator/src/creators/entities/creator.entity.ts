import { ApprovalStatus } from 'src/approval-status/entities/approval-status.entity';
import { CreatorCategory } from 'src/creator-category/entities/creator-category.entity';
import { Profile } from 'src/profile/entities/profile.entity';
import { Review } from 'src/review/entities/review.entity';
import {
  BaseEntity,
  Column,
  Entity,
  Geometry,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Creator extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(
    () => CreatorCategory,
    (creatorCategory) => creatorCategory.creatorId,
  )
  category: CreatorCategory[];

  @Column({
    type: 'geometry',
    nullable: true,
    spatialFeatureType: 'geometry',
    srid: 4326,
  })
  location: Geometry;

  @Column()
  portfolio: string;

  @OneToOne(() => ApprovalStatus, (approvalStatus) => approvalStatus.creatorId)
  verified: ApprovalStatus;

  @OneToOne(() => Profile, (profile) => profile.creatorId)
  profile: Profile;

  @OneToMany(() => Review, (review) => review.creatorId)
  reviews: Review[];
}
