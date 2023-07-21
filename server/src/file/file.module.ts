import { Module } from '@nestjs/common';
import { FileService } from './file.service';

@Module({})
export class FileModule {
  providers: [FileService];
}
