import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from './common/helper/env.helper';
import { Client } from './client/entities/client.entity';
const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [ ClientModule, ConfigModule.forRoot({ envFilePath, isGlobal: true }), TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [ __dirname + '/**/*.entity{.ts,.js}' ],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([ Client ]),
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})

export class AppModule {}
