import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/products/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './common/config/configuration';
import { MailerModule, PugAdapter } from '@nest-modules/mailer';
import { join } from 'path';
import { PusherModule } from './modules/pusher/pusher.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('database.mysql.host'),
        port: +configService.get('database.mysql.port'),
        username: configService.get('database.mysql.user'),
        password: configService.get('database.mysql.password'),
        database: configService.get('database.mysql.db', 'ecommerce-db'),
        entities: ['dist/**/*.entity.js'],
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get('mail.host'),
          secure: false,
          auth: {
            user: configService.get('mail.user'),
            pass: configService.get('mail.password'),
          },
        },
        defaults: {
          from: `'No Reply' <${configService.get('mail.from')}>`,
        },
        template: {
          dir: join(__dirname, 'common/templates'),
          adapter: new PugAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
    PusherModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          app_id: configService.get('pusher.app_id'),
          key: configService.get('pusher.key'),
          secret: configService.get('pusher.secret'),
          cluster: configService.get('pusher.cluster'),
        };
      },
      inject: [ConfigService],
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
