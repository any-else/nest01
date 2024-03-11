import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  store: any[];

  constructor() {
    this.store = [];
  }

  create(todo: any) {
    this.store = [...this.store, todo];
    return this.store;
  }
}
