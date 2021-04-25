import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MessasingModule } from './app/controllers/messasing/messasing.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MessasingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
