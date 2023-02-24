import {MigrationInterface, QueryRunner} from "typeorm";

export class address1676599344378 implements MigrationInterface {
    name = 'address1676599344378'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "business" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "business" ADD "address1" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "business" ALTER COLUMN "location" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "business" ALTER COLUMN "location" TYPE geometry(geometry,4326)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "business" ALTER COLUMN "location" TYPE geometry(GEOMETRY,0)`);
        await queryRunner.query(`ALTER TABLE "business" ALTER COLUMN "location" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "business" DROP COLUMN "address1"`);
        await queryRunner.query(`ALTER TABLE "business" ADD "address" character varying NOT NULL`);
    }

}
