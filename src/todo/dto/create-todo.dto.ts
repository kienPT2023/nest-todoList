import { IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  title: string;

  @IsBoolean()
  isCompleted?: boolean;
}
