import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { LogRequest } from 'src/app/models/log-request/log-request';
import { Messasing } from '../../../app/models/messasing/messasing';

@Injectable()
export class MessasingService {
    constructor(private readonly amqpConnection: AmqpConnection) { }

    async publish(id: number) {
        await this.amqpConnection.publish(
            'exchange_queue_1', 
            'subscribe-route', 
            {
                id: id
            }
        );
    }

    async rpc(id: number) {
        return await this.amqpConnection.request<Messasing>({
            exchange: 'exchange_queue_1', 
            routingKey: 'rpc-route', 
            payload: {
                id: id
            }
        })
    }
}
