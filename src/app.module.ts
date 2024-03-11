import { Module } from '@nestjs/common';
import { TodoModule } from './modules/todo/todo.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [TodoModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
