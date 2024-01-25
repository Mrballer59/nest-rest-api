import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Leanne graham',
      email: 'testing@Leannegraham.com',
      role: 'ENGINEER',
    },
    {
      id: 2,
      name: 'Max well ',
      email: 'testing@maxwell.com',
      role: 'ADMIN',
    },
    {
      id: 3,
      name: 'Jacob calle',
      email: 'testing@Jacobcalle.com',
      role: 'ADMIN',
    },
    {
      id: 4,
      name: 'Jonas RAmirez',
      email: 'testing@Jacobcalle.com',
      role: 'ADMIN',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }
  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }
  create(user: { name: string; email });
}
