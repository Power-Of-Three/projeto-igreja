import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Agenda } from "./entities/agenda.entity";
import { AgendaController } from "./controllers/agenda.controller";
import { AgendaService } from "./services/agenda.service";

@Module({
    imports: [TypeOrmModule.forFeature([Agenda])],
    providers: [AgendaService],
    controllers: [AgendaController],
    exports: [TypeOrmModule],
  })
  export class AgendaModule {}