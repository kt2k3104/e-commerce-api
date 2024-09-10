import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class VariantOption1725812527469 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'variant_options',
        columns: [
          { name: 'id', type: 'serial', isPrimary: true },
          { name: 'product_variant_id', type: 'int', isNullable: false },
          { name: 'option_item_id', type: 'int', isNullable: false },
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
    await queryRunner.createForeignKeys('variant_options', [
      new TableForeignKey({
        columnNames: ['product_variant_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'product_variants',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['option_item_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'option_items',
        onDelete: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('variant_options');
  }
}
