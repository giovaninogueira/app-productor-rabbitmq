import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { LogRequest } from './log-request';

@Module({
    imports: [SequelizeModule.forFeature([LogRequest])],
    exports: [SequelizeModule]
})
export class LogRequestModule {}