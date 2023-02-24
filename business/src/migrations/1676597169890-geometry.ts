import { MigrationInterface, QueryRunner } from 'typeorm';

export class geometry1676597169890 implements MigrationInterface {
  name = 'geometry1676597169890';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "business" DROP COLUMN "location"`);
    await queryRunner.query(
      `ALTER TABLE "business" ADD "location" geometry NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "business" DROP COLUMN "location"`);
    await queryRunner.query(
      `ALTER TABLE "business" ADD "location" point NOT NULL`,
    );
  }
}
