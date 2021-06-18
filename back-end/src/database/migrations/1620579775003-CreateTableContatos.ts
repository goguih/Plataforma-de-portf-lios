import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableContato1620579775003 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "contatos",
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
                    name: "link",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "plataforma",
                    type: "varchar",
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
                    name: "FKContatosPortfolios",
                    columnNames: ["portfolioId"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "portfolios",
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                },
            ]
        }));
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("contatos");
    }
}
