import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Shipping1725790373653 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'shippings',
        columns: [
          { name: 'id', type: 'serial', isPrimary: true },
          { name: 'user_id', type: 'int', isNullable: false },
          { name: 'order_id', type: 'int', isNullable: false },
          { name: 'address_id', type: 'int', isNullable: false },
          { name: 'shipping_method', type: 'varchar', isNullable: false },
          { name: 'shipping_cost', type: 'int', isNullable: false },
          {
            name: 'tracking_number',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'status_shipping',
            type: 'varchar',
            isNullable: false,
          },
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
    await queryRunner.createForeignKeys('shippings', [
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['order_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'orders',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['address_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'addresses',
        onDelete: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('shippings');
  }
}
