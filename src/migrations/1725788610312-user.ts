import { Gender } from 'src/common/enums/user.enum';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class User1725788610312 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'full_name',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'nickname',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'gender',
            type: 'enum',
            enum: Object.values(Gender),
            isNullable: true,
          },
          {
            name: 'birthday',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '225',
            isNullable: false,
          },
          {
            name: 'avatar',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'nationality',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'phone_number',
            type: 'varchar',
            length: '12',
            isNullable: false,
          },
          {
            name: 'hash_password',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'pin',
            type: 'varchar',
            length: '6',
            isNullable: false,
          },
          {
            name: 'facebook_link',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'role',
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
