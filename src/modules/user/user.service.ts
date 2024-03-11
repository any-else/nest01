import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class UserService {
  userList: any[];
  constructor() {
    this.userList = JSON.parse(fs.readFileSync('src/user.json', 'utf-8'));
  }

  create(createUserDto) {
    const newList = [...this.userList, createUserDto];
    fs.writeFileSync('src/user.json', JSON.stringify(newList));
    return 'tạo mới thành công';
  }

  findAll() {
    return this.userList;
  }

  findOne(id: string) {
    const result = this.userList?.find((item) => item._id == id);
    console.log({ result, id });
    return result;
  }

  update(id: string, updateUserDto) {
    console.log(id);
    const checkUser = this.userList?.find((item) => item._id == id);
    if (!checkUser)
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);

    const index = this.userList.findIndex((item) => item._id == id);

    [...this.userList, (this.userList[index] = updateUserDto)];

    fs.writeFileSync('src/user.json', JSON.stringify(this.userList));
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
