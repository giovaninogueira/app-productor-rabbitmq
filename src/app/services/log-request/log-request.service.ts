import { Injectable, Logger } from '@nestjs/common';
import { Request } from 'express';
import { LogRequest } from 'src/app/models/log-request/log-request';

@Injectable()
export class LogRequestService {
    async save(req: Request, logRequest: LogRequest): Promise<LogRequest> {
        logRequest.ip = this.ip(
            req.header('x-forwarded-for'), 
            req.ip
        );
        return await logRequest.save(); 
    }

    private ip(forwarded: string, ip: string) {
        return forwarded || ip;
    }
}
