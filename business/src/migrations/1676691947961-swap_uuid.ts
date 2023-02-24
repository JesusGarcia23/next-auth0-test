import {MigrationInterface, QueryRunner} from "typeorm";

export class swapUuid1676691947961 implements MigrationInterface {
    name = 'swapUuid1676691947961'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "business" DROP CONSTRAINT "FK_c50ffde35cef413c4b206fa3b58"`);
        await queryRunner.query(`ALTER TABLE "business" DROP CONSTRAINT "REL_c50ffde35cef413c4b206fa3b5"`);
        await queryRunner.query(`ALTER TABLE "business" DROP COLUMN "verifiedId"`);
        await queryRunner.query(`ALTER TABLE "business" ADD "verifiedId" uuid`);
        await queryRunner.query(`ALTER TABLE "business" ADD CONSTRAINT "UQ_c50ffde35cef413c4b206fa3b58" UNIQUE ("verifiedId")`);
        await queryRunner.query(`ALTER TABLE "approval_status" DROP CONSTRAINT "PK_d5e7d905093f8bc0de9d2ce0fd0"`);
        await queryRunner.query(`ALTER TABLE "approval_status" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "approval_status" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "approval_status" ADD CONSTRAINT "PK_d5e7d905093f8bc0de9d2ce0fd0" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "business" ADD CONSTRAINT "FK_c50ffde35cef413c4b206fa3b58" FOREIGN KEY ("verifiedId") REFERENCES "approval_status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "business" DROP CONSTRAINT "FK_c50ffde35cef413c4b206fa3b58"`);
        await queryRunner.query(`ALTER TABLE "approval_status" DROP CONSTRAINT "PK_d5e7d905093f8bc0de9d2ce0fd0"`);
        await queryRunner.query(`ALTER TABLE "approval_status" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "approval_status" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "approval_status" ADD CONSTRAINT "PK_d5e7d905093f8bc0de9d2ce0fd0" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "business" DROP CONSTRAINT "UQ_c50ffde35cef413c4b206fa3b58"`);
        await queryRunner.query(`ALTER TABLE "business" DROP COLUMN "verifiedId"`);
        await queryRunner.query(`ALTER TABLE "business" ADD "verifiedId" integer`);
        await queryRunner.query(`ALTER TABLE "business" ADD CONSTRAINT "REL_c50ffde35cef413c4b206fa3b5" UNIQUE ("verifiedId")`);
        await queryRunner.query(`ALTER TABLE "business" ADD CONSTRAINT "FK_c50ffde35cef413c4b206fa3b58" FOREIGN KEY ("verifiedId") REFERENCES "approval_status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
