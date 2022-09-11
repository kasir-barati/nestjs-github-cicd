import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString, Length } from 'class-validator';

export class CreatePostDto {
    @ApiProperty({
        description: 'Enter post title',
        example: 'Japan is awesome',
        minLength: 1,
        maxLength: 200,
    })
    @Length(1, 200)
    @IsString()
    title: string;

    @ApiProperty({
        description: 'Enter your post content',
        example: "I'll be in Japan",
    })
    @IsString()
    content: string;

    @ApiProperty({
        description: 'Shall we publish the post?',
        example: true,
    })
    @IsBoolean()
    published: boolean;
}
