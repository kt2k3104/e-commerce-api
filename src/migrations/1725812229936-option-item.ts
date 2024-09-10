import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class OptionItem1725812229936 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'option_items',
        columns: [
          { name: 'id', type: 'serial', isPrimary: true },
          { name: 'option_id', type: 'int', isNullable: false },
          { name: 'value', type: 'varchar', isNullable: false },
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
    await queryRunner.createForeignKey(
      'option_items',
      new TableForeignKey({
        columnNames: ['option_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'options',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('option_items');
  }
}
