import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { Messasing } from 'src/app/models/messasing';

@Injectable()
export class MessasingService {
    constructor(private readonly amqpConnection: AmqpConnection) { }

    async publish(messasing: Messasing) {
        await this.amqpConnection.publish(
            'exchange_queue_1', 
            'subscribe-route', 
            messasing
        );
    }

    async rpc(messasing: Messasing) {
        return await this.amqpConnection.request<Messasing>({
            exchange: 'exchange_queue_1', 
            routingKey: 'rpc-route', 
            payload: messasing
        })
    }
}
