import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { Admin } from './admins.model';

@Controller('admins')
export class AdminsController {
  constructor(private adminsService: AdminsService) {}

  @Get()
  async findAll() {
    return this.adminsService.findAll();
  }

  @Get('/:cod_admin')
  async findOne(cod_admin: number) {
    return this.adminsService.findOne(cod_admin);
  }

  @Delete('/remove/:cod_admin')
  async remove(cod_admin: number) {
    return this.adminsService.remove(cod_admin);
  }

  @Post('/create')
  async create(@Body() adminData: Admin) {
    return this.adminsService.create(adminData);
  }

  @Put('/update/:cod_admin')
  async update(@Body() adminData: Admin) {
    return this.adminsService.update(adminData);
  }
}
