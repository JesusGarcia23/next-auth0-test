import { MigrationInterface, QueryRunner } from 'typeorm';

export class gen1676687429968 implements MigrationInterface {
  name = 'gen1676687429968';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "business" DROP COLUMN "address1"`);
    await queryRunner.query(
      `ALTER TABLE "business" ADD "address" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "business" ALTER COLUMN "location" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "business" ALTER COLUMN "website" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "business" ALTER COLUMN "website" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "business" ALTER COLUMN "location" DROP NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "business" DROP COLUMN "address"`);
    await queryRunner.query(
      `ALTER TABLE "business" ADD "address1" character varying NOT NULL`,
    );
  }
}
