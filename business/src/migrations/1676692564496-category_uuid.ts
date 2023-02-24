import {MigrationInterface, QueryRunner} from "typeorm";

export class categoryUuid1676692564496 implements MigrationInterface {
    name = 'categoryUuid1676692564496'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "business_category" DROP CONSTRAINT "PK_6fa4c15119f333b301d614c0b1a"`);
        await queryRunner.query(`ALTER TABLE "business_category" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "business_category" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "business_category" ADD CONSTRAINT "PK_6fa4c15119f333b301d614c0b1a" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "business_category" DROP CONSTRAINT "PK_6fa4c15119f333b301d614c0b1a"`);
        await queryRunner.query(`ALTER TABLE "business_category" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "business_category" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "business_category" ADD CONSTRAINT "PK_6fa4c15119f333b301d614c0b1a" PRIMARY KEY ("id")`);
    }

}
