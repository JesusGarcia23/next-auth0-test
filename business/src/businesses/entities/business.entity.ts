import { ApprovalStatus } from 'src/approval-status/entities/approval-status.entity';
import { BusinessCategory } from 'src/business-category/entities/business-category.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import { Geometry } from 'geojson';
import { SocialMedia } from 'src/social-media/entities/social-media.entity';
import { Review } from 'src/review/entities/review.entity';
import { IsEmail, IsNotEmpty } from 'class-validator';

@Entity()
export class Business extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsNotEmpty()
  @Column({ nullable: false })
  businessName: string;

  @Column({ nullable: false })
  address: string;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'geometry',
    srid: 4326,
    nullable: false,
  })
  location: Geometry;

  @Column({ nullable: false, unique: true })
  @IsEmail()
  businessEmail: string;

  @OneToMany(
    () => BusinessCategory,
    (businessCategory) => businessCategory.businessId,
    { nullable: false },
  )
  category: BusinessCategory[];

  @Column({ unique: true, nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  website?: string;

  @OneToMany(() => SocialMedia, (socialMedia) => socialMedia.business, {
    nullable: false,
  })
  socialMedias: SocialMedia[];

  @OneToMany(() => Review, (review) => review.business, {
    nullable: true,
  })
  reviews?: Review[];

  @OneToOne(() => ApprovalStatus, (approvalStatus) => approvalStatus.businessId)
  @JoinColumn()
  verified: ApprovalStatus;
}
