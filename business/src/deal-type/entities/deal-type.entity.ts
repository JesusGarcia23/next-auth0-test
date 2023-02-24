import { Deal } from 'src/deal/entities/deal.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum DealTypeName {
  DISCOUNT = 'Discount',
  FREE = 'Free',
}

export enum DealTypeValue {
  DISCOUNT = 0,
  FREE = 100,
}

@Entity()
export class DealType extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: DealTypeName,
    default: DealTypeName.DISCOUNT,
  })
  name: string;

  @Column({
    type: 'enum',
    enum: DealTypeValue,
    default: DealTypeValue.DISCOUNT,
  })
  value: number;

  @OneToOne(() => Deal, (deal) => deal.dealType)
  dealId: Deal;
}
