import { Module } from '@nestjs/common';

import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PostRepository } from './post.repository';
import { PrismaModule } from '@src/shared/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [PostController],
    providers: [PostService, PostRepository],
    exports: [PostService],
})
export class PostModule {}
