import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1722266977830 implements MigrationInterface {
    name = 'Migrations1722266977830'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gadinhos" RENAME COLUMN "nome" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gadinhos" RENAME COLUMN "name" TO "nome"`);
    }

}
