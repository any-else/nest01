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

  getAll() {
    return this.store;
  }

  getById(id) {
    const data = this.store?.find((item) => item.id == id);
    console.log('data', data);
    return data;
  }
}
