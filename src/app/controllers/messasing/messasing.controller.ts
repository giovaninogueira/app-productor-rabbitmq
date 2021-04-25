import { Body, Controller, HttpCode, Logger, Post, Req } from '@nestjs/common';
import { LogRequest } from 'src/app/models/log-request/log-request';
import { Messasing } from 'src/app/models/messasing/messasing';
import { LogRequestService } from 'src/app/services/log-request/log-request.service';
import { MessasingService } from './messasing.service';
import { Request } from 'express';

@Controller('messasing')
export class MessasingController {

  constructor(
    private readonly messasingService: MessasingService,
    private readonly logRequestService: LogRequestService
  ) { }

  @Post()
  @HttpCode(200)
  async helloWord(@Req() req: Request) {

    let messasing = req.body;

    const logRequest = await this.logRequestService.save(req, new LogRequest());

    if (messasing.type == 'sub_pub') {
      await this.messasingService.publish(logRequest.id);
      return {
        msg: 'Event Ok'
      };
    } else if (messasing.type == 'rpc') {
      return await this.messasingService.rpc(logRequest.id);
    }
    return {
      'msg': 'type invalid'
    }
  }
}
