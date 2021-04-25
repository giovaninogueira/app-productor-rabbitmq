import { Module } from '@nestjs/common';
import { MessasingService } from './messasing.service';
import { MessasingController } from './messasing.controller';
import { AmqpConnection, RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { RabbitMQ } from 'src/config/rabbitmq';
import { MySql } from 'src/config/mysql';
import { SequelizeModule } from '@nestjs/sequelize';
import { LogRequestService } from 'src/app/services/log-request/log-request.service';

@Module({
  imports: [
    RabbitMQModule.forRootAsync(RabbitMQModule, RabbitMQ),
    SequelizeModule.forRootAsync(MySql)
  ],
  controllers: [MessasingController],
  providers: [MessasingService, LogRequestService]
})
export class MessasingModule {}
