import { Controller, Get, Post, Body, Param, Query, Put, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { CreateTaskDTO, DeleteTaskDTO } from './dto/task.dto'

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) { }

  @Get()
  async findAll(@Query() query: object): Promise<Task[]> {
    return await this.taskService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Task> {
    return await this.taskService.findOneById(id);
  }

  @Post()
  async createTask(@Body() createTaskDTO: CreateTaskDTO): Promise<Task> {
    return this.taskService.create(createTaskDTO);
  }

  @Put()
  async deleteTask(@Body() deleteTaskDTO: DeleteTaskDTO): Promise<Task> {
    return this.taskService.delete(deleteTaskDTO);
  }

  @Put(':id')
  async updateTask(@Body() deleteTaskDTO: DeleteTaskDTO): Promise<Task> {
    return this.taskService.updateTask(deleteTaskDTO);
  }
}
