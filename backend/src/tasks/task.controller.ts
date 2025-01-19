import { Controller, Post, Body } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Post()
  async createTask(@Body() body: { title: string; deadline: string }) {
    return this.taskService.createTask(body.title, body.deadline);
  }

  @Post('local-ollama')
  async createTaskLocalOllama(@Body() body: { title: string; deadline: string }) {
    return this.taskService.createTaskUsingLocalOllama(body.title, body.deadline);
  }
}
