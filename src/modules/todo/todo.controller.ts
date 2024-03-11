import { Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('api/v1/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post('create')
  createTodo(@Req() req, @Res() res) {
    const dataTodo = req.body;
    const result = this.todoService.create(dataTodo);

    res.status(201).json({
      status: 201,
      data: result,
    });
  }

  @Get('list')
  getAll() {
    return this.todoService.getAll();
  }

  @Get(':todoId')
  getById(@Param('todoId') todoId: string) {
    return this.todoService.getById(+todoId);
  }
}
