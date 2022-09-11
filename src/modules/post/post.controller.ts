import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { IdParamValidator } from '@src/shared/decorators/param-id-validator.dto';

@ApiTags('Post resource')
@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Post()
    create(@Body() createPostDto: CreatePostDto) {
        return this.postService.create(createPostDto);
    }

    @Get()
    findAll() {
        return this.postService.findAll();
    }

    @Get(':id')
    findOne(@Param() { id }: IdParamValidator) {
        return this.postService.findOne(id);
    }

    @Patch(':id')
    update(
        @Param() { id }: IdParamValidator,
        @Body() updatePostDto: UpdatePostDto,
    ) {
        return this.postService.update(id, updatePostDto);
    }

    @Delete(':id')
    remove(@Param() { id }: IdParamValidator) {
        return this.postService.remove(id);
    }
}
