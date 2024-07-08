import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FuncionariosService } from './funcionarios.service';
import { FuncionariosController } from './funcionarios.controller';
import { Funcionario } from './funcionarios.model';

@Module({
  imports: [SequelizeModule.forFeature([Funcionario])],
  providers: [FuncionariosService],
  controllers: [FuncionariosController],
})
export class FuncionariosModule {}
