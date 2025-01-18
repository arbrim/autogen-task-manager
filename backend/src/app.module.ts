import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './tasks/task.module';
import { AiModule } from './ai/ai.module';
import { typeOrmConfig } from './config/data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TaskModule,
    AiModule,
  ],
})
export class AppModule { }
