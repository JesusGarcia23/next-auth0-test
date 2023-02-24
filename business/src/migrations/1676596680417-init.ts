import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1676596680417 implements MigrationInterface {
  name = 'init1676596680417';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "business_category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "businessIdId" uuid, CONSTRAINT "PK_6fa4c15119f333b301d614c0b1a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "social_media" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "type" character varying NOT NULL, "businessId" uuid, CONSTRAINT "PK_54ac0fd97432069e7c9ab567f8b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "business" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "businessName" character varying NOT NULL, "address" character varying NOT NULL, "location" point NOT NULL, "phoneNumber" character varying NOT NULL, "website" character varying NOT NULL, "verifiedId" integer, CONSTRAINT "REL_c50ffde35cef413c4b206fa3b5" UNIQUE ("verifiedId"), CONSTRAINT "PK_0bd850da8dafab992e2e9b058e5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."approval_status_status_enum" AS ENUM('approved', 'denied', 'pending')`,
    );
    await queryRunner.query(
      `CREATE TABLE "approval_status" ("id" SERIAL NOT NULL, "status" "public"."approval_status_status_enum" NOT NULL DEFAULT 'pending', "reason" character varying, CONSTRAINT "PK_d5e7d905093f8bc0de9d2ce0fd0" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "business_category" ADD CONSTRAINT "FK_4bd20b0f95724bca1d1ba67daeb" FOREIGN KEY ("businessIdId") REFERENCES "business"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "social_media" ADD CONSTRAINT "FK_23e33c8640bc4fcfb75b525042c" FOREIGN KEY ("businessId") REFERENCES "business"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "business" ADD CONSTRAINT "FK_c50ffde35cef413c4b206fa3b58" FOREIGN KEY ("verifiedId") REFERENCES "approval_status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "business" DROP CONSTRAINT "FK_c50ffde35cef413c4b206fa3b58"`,
    );
    await queryRunner.query(
      `ALTER TABLE "social_media" DROP CONSTRAINT "FK_23e33c8640bc4fcfb75b525042c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "business_category" DROP CONSTRAINT "FK_4bd20b0f95724bca1d1ba67daeb"`,
    );
    await queryRunner.query(`DROP TABLE "approval_status"`);
    await queryRunner.query(`DROP TYPE "public"."approval_status_status_enum"`);
    await queryRunner.query(`DROP TABLE "business"`);
    await queryRunner.query(`DROP TABLE "social_media"`);
    await queryRunner.query(`DROP TABLE "business_category"`);
  }
}
