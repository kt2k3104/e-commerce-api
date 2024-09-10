import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreditCard1725805993039 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'credit_cards',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'card_number',
            type: 'varchar',
            length: '16',
            isNullable: false,
          },
          {
            name: 'name_on_card',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'expiration_date',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'cvv',
            type: 'varchar',
            length: '3',
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
    await queryRunner.createForeignKey(
      'credit_cards',
      new TableForeignKey({
        columnNames: ['id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'payment_methods',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('credit_cards');
  }
}
