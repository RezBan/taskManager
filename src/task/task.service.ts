import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDTO, DeleteTaskDTO } from './dto/task.dto';

interface queryDTO {
  user?: string;
}
@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async findAll(query: queryDTO): Promise<Task[]> {
    const allTasks = await this.taskRepository.find({
      relations: ["user"],
    });
    return allTasks;
  }

  async findOneById(id: string): Promise<Task> {
    return await this.taskRepository.findOne(id, {
      relations: ['user'],
    });
  }

  async create(
    createTaskDTO: CreateTaskDTO,
  ): Promise<Task> {
    return await this.taskRepository.save(createTaskDTO);
  }

  async delete(deleteTaskDTO: DeleteTaskDTO): Promise<Task> {
    return await this.taskRepository.save(deleteTaskDTO)
  }

  async updateTask(deleteTaskDTO: DeleteTaskDTO): Promise<Task> {
    return await this.taskRepository.save(deleteTaskDTO)
  }
}
