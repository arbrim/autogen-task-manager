import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { AiService } from '../ai/ai.service';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
    private aiService: AiService,
  ) { }

  async createTask(title: string, deadline: string) {
    const priority = await this.aiService.prioritizeTask(title);

    const task = this.taskRepository.create({ title, deadline, completed: false });
    await this.taskRepository.save(task);

    return { task, priority };
  }
}
