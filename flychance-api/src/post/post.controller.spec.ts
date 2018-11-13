import { Test, TestingModule } from '@nestjs/testing';
import { PostController } from './post.controller';
import { PostService } from './post.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [PostController ],
      providers: [PostService],
    }).compile();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const postController = app.get<PostController>(PostController);
      expect(postController.root()).toBe('Hello World!');
    });
  });
});