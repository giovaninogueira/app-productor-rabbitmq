import { Body, Controller, HttpCode, Logger, Post } from '@nestjs/common';
import { Messasing } from 'src/app/models/messasing';
import { MessasingService } from './messasing.service';

@Controller('messasing')
export class MessasingController {

  constructor(private readonly messasingService: MessasingService) { }

  @Post()
  @HttpCode(200)
  async helloWord(@Body() messasing: Messasing) {
    if (messasing.type == 'sub_pub') {
      await this.messasingService.publish(messasing);
      return {
        msg: 'Event Ok'
      };
    } else if (messasing.type == 'rpc') {
      return await this.messasingService.rpc(messasing);
    }
    return {
      'msg': 'type invalid'
    }
  }
}
