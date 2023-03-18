import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodolistController } from './todolist/todolist.controller';

@Module({
  imports: [],
  controllers: [AppController, TodolistController],
  providers: [AppService],
})
export class AppModule {}
