import { Module } from '@nestjs/common';
import { MessasingService } from './messasing.service';
import { MessasingController } from './messasing.controller';
import { AmqpConnection, RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { RabbitMQ } from 'src/config/rabbitmq';

@Module({
  imports: [
    RabbitMQModule.forRootAsync(RabbitMQModule, RabbitMQ)
  ],
  controllers: [MessasingController],
  providers: [MessasingService]
})
export class MessasingModule {}
