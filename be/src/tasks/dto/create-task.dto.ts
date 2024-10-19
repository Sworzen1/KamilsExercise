import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

enum TaskStatus {
  TODO = 'todo',
  INPROGRESS = 'inProgress',
  DONE = 'done',
}

export class CreateTaskDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'cannot be empty' })
  @IsString({ message: 'must be a string' })
  title: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'cannot be empty' })
  @IsString({ message: 'must be a string' })
  description: string;

  @ApiProperty({ enum: TaskStatus, default: TaskStatus.TODO })
  @IsEnum(TaskStatus, { message: 'status must be todo, inProgress or done' })
  status: TaskStatus;
}
