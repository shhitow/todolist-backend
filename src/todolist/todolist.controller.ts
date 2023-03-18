'use strict';

import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Body,
} from '@nestjs/common';
import path from 'path';
import { readFileSync, writeFileSync } from 'fs';

@Controller('todolist')
export class TodolistController {
  @Get(':id')
  getById(@Param('id') id: string) {
    const data = readFileSync('todos.json', 'utf8');
    const jsonData = JSON.parse(data);
    const item = jsonData.find((item) => item.id === id);
    return item;
  }

  @Get()
  getAll(): string {
    const data = readFileSync('/todos.json', 'utf8');
    const jsonData = JSON.parse(data);
    return jsonData;
  }

  @Post()
  create(@Body() newData: any) {
    const data = readFileSync('p/todos.json', 'utf8');
    const jsonData = JSON.parse(data);
    jsonData.push(newData);
    writeFileSync('/todos.json', JSON.stringify(jsonData));
    return newData;
  }

  @Put()
  edit(): string {
    return '1223';
  }

  @Delete()
  del(): string {
    return '123';
  }
}
