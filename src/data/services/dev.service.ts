import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Agenda } from "../../agenda/entities/agenda.entity";
import { Postagem } from "src/postagem/entities/postagem.entity";

@Injectable()
export class DevService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.MYSQL_PORT_INTERNAL
        ? parseInt(process.env.MYSQL_PORT_INTERNAL)
        : 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'db_igreja',
      entities: [Agenda, Postagem],
      synchronize: true,
    };
  }
}