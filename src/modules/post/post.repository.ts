import { Injectable } from '@nestjs/common';
import { PrismaService } from '@src/shared/prisma/prisma.service';

import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostRepository {
    constructor(private readonly prismaService: PrismaService) {}

    create(createPostDto: CreatePostDto) {
        return this.prismaService.post.create({
            data: {
                title: createPostDto.title,
                content: createPostDto.content,
                published: createPostDto.published,
            },
        });
    }

    findAll() {
        return this.prismaService.post.findMany({ where: {} });
    }

    findOne(id: string) {
        return this.prismaService.post.findUnique({ where: { id } });
    }

    update(id: string, updatePostDto: UpdatePostDto) {
        return this.prismaService.post.update({
            where: { id },
            data: { ...updatePostDto },
        });
    }

    remove(id: string) {
        return this.prismaService.post.delete({ where: { id } });
    }
}
