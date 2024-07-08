import { Module } from '@nestjs/common';
import { Admin } from './admins.model';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Admin])],
  providers: [AdminsService],
  controllers: [AdminsController],
  exports: [AdminsService],
})
export class AdminsModule {}
