import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({
        description: "User's email",
        example: 'kasir.barati@gmail.com',
        maxLength: 320,
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        description: "User's name",
        example: 'Kasir san',
        maxLength: 200,
    })
    @Length(1, 200)
    @IsString()
    name: string;
}
