import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './admins.model';

@Injectable()
export class AdminsService {
  constructor(
    @InjectModel(Admin)
    private adminModel: typeof Admin,
  ) {}

  async findAll(): Promise<Admin[]> {
    return this.adminModel.findAll();
  }

  findOne(cod_admin: number): Promise<Admin> {
    return this.adminModel.findOne({
      where: {
        cod_admin,
      },
    });
  }

  async remove(cod_admin: number): Promise<void> {
    const admin = await this.findOne(cod_admin);
    await admin.destroy();
  }

  async update(cod_admin: number, adminUpdates: any): Promise<Admin> {
    const admin = await this.findOne(cod_admin);
    if (!admin) {
      // TODO: throw a custom exception
      // throw new NotFoundException(`Admin with cod_admin ${cod_admin} not found`);
    } else {
      return admin.update(adminUpdates);
    }
  }

  async create(adminData: any): Promise<Admin> {
    const admin = new this.adminModel(adminData);
    return admin.save();
  }
}
