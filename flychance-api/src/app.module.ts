import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PostModule} from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [ PostModule,
      TypeOrmModule.forRoot(),
     
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
