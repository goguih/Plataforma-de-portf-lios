import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableExperiencias1620576664750 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "experiencias",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "portfolioId",
                    type: "int",
                    isNullable: false,
                },
                {
                    name: "cargo",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "organizacao",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "descricao",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "dataInicio",
                    type: "date",
                    isNullable: true,
                },
                {
                    name: "dataTermino",
                    type: "date",
                    isNullable: true,
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
                    name: "FKExperienciasPortfolios",
                    columnNames: ["portfolioId"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "portfolios",
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }
            ]
        }));
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("experiencias");
    }
}