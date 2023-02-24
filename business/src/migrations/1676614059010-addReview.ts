import {MigrationInterface, QueryRunner} from "typeorm";

export class addReview1676614059010 implements MigrationInterface {
    name = 'addReview1676614059010'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "review" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "rate" integer NOT NULL, "comment" character varying NOT NULL, "reviewer" character varying NOT NULL, "businessId" uuid, CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "social_media" DROP CONSTRAINT "PK_54ac0fd97432069e7c9ab567f8b"`);
        await queryRunner.query(`ALTER TABLE "social_media" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "social_media" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "social_media" ADD CONSTRAINT "PK_54ac0fd97432069e7c9ab567f8b" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_2185579dd3d78702b90d4e5a2c0" FOREIGN KEY ("businessId") REFERENCES "business"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_2185579dd3d78702b90d4e5a2c0"`);
        await queryRunner.query(`ALTER TABLE "social_media" DROP CONSTRAINT "PK_54ac0fd97432069e7c9ab567f8b"`);
        await queryRunner.query(`ALTER TABLE "social_media" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "social_media" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "social_media" ADD CONSTRAINT "PK_54ac0fd97432069e7c9ab567f8b" PRIMARY KEY ("id")`);
        await queryRunner.query(`DROP TABLE "review"`);
    }

}
