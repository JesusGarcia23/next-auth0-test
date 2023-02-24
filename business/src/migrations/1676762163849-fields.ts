import {MigrationInterface, QueryRunner} from "typeorm";

export class fields1676762163849 implements MigrationInterface {
    name = 'fields1676762163849'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "business" ADD "businessEmail" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "business" ADD CONSTRAINT "UQ_4719c50883da4eaf367ecc986ae" UNIQUE ("businessEmail")`);
        await queryRunner.query(`ALTER TABLE "business" ALTER COLUMN "phoneNumber" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "business" ADD CONSTRAINT "UQ_e057547b4990f60480eef83d2dc" UNIQUE ("phoneNumber")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "business" DROP CONSTRAINT "UQ_e057547b4990f60480eef83d2dc"`);
        await queryRunner.query(`ALTER TABLE "business" ALTER COLUMN "phoneNumber" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "business" DROP CONSTRAINT "UQ_4719c50883da4eaf367ecc986ae"`);
        await queryRunner.query(`ALTER TABLE "business" DROP COLUMN "businessEmail"`);
    }

}
