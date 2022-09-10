import { Module } from '@nestjs/common';
import { PassengerModule } from './passenger/passenger.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.URI_MONGODB),
    PassengerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
