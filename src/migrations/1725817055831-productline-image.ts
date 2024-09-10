import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class ProductlineImage1725817055831 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'productline_images',
        columns: [
          { name: 'id', type: 'serial', isPrimary: true },
          { name: 'productline_id', type: 'int', isNullable: false },
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
      'productline_images',
      new TableForeignKey({
        columnNames: ['productline_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'productlines',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('productline_images');
  }
}
