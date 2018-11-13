import { Get, Controller,Param, Header } from '@nestjs/common';
import { PostService } from './post.service';
import { HttpHeaders } from '@angular/common/http';


@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get()
    root():string{
        return this.postService.root();
    }

   

    @Get('create')
    async create():Promise<string>{
        return this.postService.create();
    }

    @Get('allposts')
    async findAll(): Promise<any> {
      return this.postService.findAll();
    }
   
}