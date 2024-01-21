import {
  Controller,
  Param,
  Get,
  Body,
  Post,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  //  GET /users
  //  GET /users/:id
  //  POST /users
  //  PATCH /users/:id

  @Get() //get /user or /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }
  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }
  @Post() // POST /users
  create(@Body() user: {}) {
    return user;
  }
  @Patch(':id') // Patch /users/:id
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }
  @Delete(':id') // DELETE /users/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}
