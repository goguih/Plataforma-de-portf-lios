import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTablePortfolios1620364676209 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "portfolios",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "criadorId",
                    type: "int",
                    isNullable: false,

                },
                {
                    name: "createdAt",
                    type: "timestamp",
                    isNullable: false,
                    default: "now()"
                }
            ],
            foreignKeys: [
                {
                    name: "FKCriadoresPortfolios",
                    columnNames: ["criadorId"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "criadores",
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("portfolios");
    }
}