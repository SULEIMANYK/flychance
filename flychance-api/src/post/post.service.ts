import { Injectable } from '@nestjs/common';
import { Post } from '../entities/post.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, getConnection } from 'typeorm';

@Injectable()
export class PostService {

    constructor(@InjectRepository(Post)
    private readonly postRepository: Repository<Post>) { }
    root(): string {
        return 'Hello Worllld!';
    }
    async create(): Promise<string> {
        let post = new Post();
        post.title = 'shevening 2';
        post.text = ' shanghaishanghaishanghaishanghaishanghaishanghaishanghaishanghaishanghaishanghai';
        post.categorie='scholarship' ;

        console.log(post.title);
        return this.postRepository.save(post)
            .then(res => {
                return 'create post ...done'
            })
            .catch(err => {
                return err
            });
    }

    async findAll(): Promise<any> {
        return await this.postRepository.find({ });
    }


    async editUseQueryRunner(): Promise<string> {
        let post = await this.postRepository.findOne({ title: "novak" });
        console.log(post)
        if (post) {
            const connection = getConnection();
            const queryRunner = connection.createQueryRunner();
            await queryRunner.connect();

            await queryRunner.startTransaction();
            try {
                await queryRunner.manager.update<Post>(Post, { title: 'novak' } , {text : 'ali va ali ja '});
                /* let a = '123bew';
                console.log(a[10].length); */
                await queryRunner.commitTransaction();
                return 'transaction done'
            } catch (err) {
                await queryRunner.rollbackTransaction();
                return 'transaction failed'
            }
        } else {
            return 'post not found'
        }
    }
 
    }

 



