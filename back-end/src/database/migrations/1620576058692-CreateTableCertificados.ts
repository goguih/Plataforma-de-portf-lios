import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableCertificados1620576058692 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "certificados",
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
                    name: "titulo",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "organizacao",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "url",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "dataEmissao",
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
                    name: "FKCertificadosPortfolios",
                    columnNames: ["portfolioId"],
                    referencedColumnNames: ["id"],
                    referencedTableName:"portfolios",
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }
            ]
        }));
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("certificados");
    }
}