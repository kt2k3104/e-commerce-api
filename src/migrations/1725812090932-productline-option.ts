import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class ProductlineOption1725812090932 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'productline_options',
        columns: [
          { name: 'id', type: 'serial', isPrimary: true },
          { name: 'productline_id', type: 'int', isNullable: false },
          { name: 'option_id', type: 'int', isNullable: false },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
            isNullable: true,
          },
        ],
      }),
    );
    await queryRunner.createForeignKeys('productline_options', [
      new TableForeignKey({
        columnNames: ['productline_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'productlines',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['option_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'options',
        onDelete: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('productline_options');
  }
}
