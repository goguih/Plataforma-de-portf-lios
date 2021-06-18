import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableProjetos1620488382949 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "projetos",
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
                    name: "nome",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "descricao",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "imagem",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "dataInicio",
                    type: "timestamp",
                    isNullable: true,
                },
                {
                    name: "dataTermino",
                    type: "timestamp",
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
                    name: "FKProjetosPortfolios",
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
        await queryRunner.dropTable("projetos");
    }
}
