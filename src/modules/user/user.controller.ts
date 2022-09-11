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

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IdParamValidator } from '@src/shared/decorators/param-id-validator.dto';

@ApiTags('User resource')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param() { id }: IdParamValidator) {
        return this.userService.findOne(id);
    }

    @Patch(':id')
    update(
        @Param() { id }: IdParamValidator,
        @Body() updateUserDto: UpdateUserDto,
    ) {
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param() { id }: IdParamValidator) {
        return this.userService.remove(id);
    }
}
