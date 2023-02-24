import {MigrationInterface, QueryRunner} from "typeorm";

export class addDealTables1676676536611 implements MigrationInterface {
    name = 'addDealTables1676676536611'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "requirement" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "deliverableDetails" character varying NOT NULL, "preferredNiche" text array, "deliverableTypes" text array, CONSTRAINT "PK_5e3278ee8e2094dd0f10a4aec62" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "deal" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "startDate" TIMESTAMP NOT NULL, "endDate" TIMESTAMP NOT NULL, "creatorSelected" character varying NOT NULL, "creatorsApplied" text array, "pin" character varying, "businessIdId" uuid, "requirementsId" uuid, CONSTRAINT "REL_37f9e90f586b09feee26f9c5d2" UNIQUE ("requirementsId"), CONSTRAINT "PK_9ce1c24acace60f6d7dc7a7189e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."deal_type_name_enum" AS ENUM('Discount', 'Free')`);
        await queryRunner.query(`CREATE TYPE "public"."deal_type_value_enum" AS ENUM('0', '100')`);
        await queryRunner.query(`CREATE TABLE "deal_type" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" "public"."deal_type_name_enum" NOT NULL DEFAULT 'Discount', "value" "public"."deal_type_value_enum" NOT NULL DEFAULT '0', CONSTRAINT "PK_3059b400ed4a307a2c92a31b8e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "niche" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "icon" character varying, CONSTRAINT "PK_86e6b646495afbd5e82deef9f09" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "deliverable_type" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "icon" character varying, CONSTRAINT "PK_b58f00d1367dab8ab5bd90acdda" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "deal" ADD CONSTRAINT "FK_e3f2e9b75a8c0d9aadb6acb40ab" FOREIGN KEY ("businessIdId") REFERENCES "business"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "deal" ADD CONSTRAINT "FK_37f9e90f586b09feee26f9c5d22" FOREIGN KEY ("requirementsId") REFERENCES "requirement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "deal" DROP CONSTRAINT "FK_37f9e90f586b09feee26f9c5d22"`);
        await queryRunner.query(`ALTER TABLE "deal" DROP CONSTRAINT "FK_e3f2e9b75a8c0d9aadb6acb40ab"`);
        await queryRunner.query(`DROP TABLE "deliverable_type"`);
        await queryRunner.query(`DROP TABLE "niche"`);
        await queryRunner.query(`DROP TABLE "deal_type"`);
        await queryRunner.query(`DROP TYPE "public"."deal_type_value_enum"`);
        await queryRunner.query(`DROP TYPE "public"."deal_type_name_enum"`);
        await queryRunner.query(`DROP TABLE "deal"`);
        await queryRunner.query(`DROP TABLE "requirement"`);
    }

}
