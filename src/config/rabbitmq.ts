import { ConfigModule, ConfigService } from "@nestjs/config"

export const RabbitMQ = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => {
        return {
            uri: config.get('RABBITMQ_URL'),
            connectionInitOptions: {
                wait: false
            }
        }
    },
}