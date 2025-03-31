import { Module } from "@nestjs/common";
import { MembrosEntity } from "./entities/membros.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MembroService } from "./service/membros.service";
import { MembrosController } from "./controller/membros.controller";

@Module({
    imports: [TypeOrmModule.forFeature([MembrosEntity])],
    providers: [MembroService],
    controllers:[MembrosController],
    exports: []
})
export class MembrosModule{}