import { Module } from "@nestjs/common";
import { Postagem } from "./entities/postagem.entity";
import { PostagemController } from "./controller/postagem.controller";
import { PostagemService } from "./service/postagem.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    providers: [PostagemService],
    exports: [],
    controllers: [PostagemController],
    imports: [TypeOrmModule.forFeature([Postagem])]
})
export class PostagemModule{}