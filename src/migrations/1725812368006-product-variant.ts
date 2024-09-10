import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class ProductVariant1725812368006 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'product_variants',
        columns: [
          { name: 'id', type: 'serial', isPrimary: true },
          { name: 'productline_id', type: 'int', isNullable: false },
          { name: 'original_price', type: 'int', isNullable: false },
          { name: 'selling_price', type: 'int', isNullable: false },
          { name: 'stock', type: 'int', isNullable: false },
          { name: 'image_url', type: 'varchar', isNullable: false },
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
      'product_variants',
      new TableForeignKey({
        columnNames: ['productline_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'productlines',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('product_variants');
  }
}
