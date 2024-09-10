import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Product1725813953302 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          { name: 'id', type: 'serial', isPrimary: true },
          { name: 'made_in', type: 'varchar', isNullable: false },
          { name: 'product_code', type: 'varchar', isNullable: false },
          { name: 'product_variant_id', type: 'int', isNullable: false },
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
      'products',
      new TableForeignKey({
        columnNames: ['product_variant_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'product_variants',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
