import 'dotenv/config';
import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'static'),
    }),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING),
    TrackModule,
    FileModule,
  ],
})
export class AppModule {}
