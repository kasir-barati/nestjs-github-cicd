import { Module } from '@nestjs/common';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { PrismaModule } from '@src/shared/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [UserController],
    providers: [UserService, UserRepository],
    exports: [UserService],
})
export class UserModule {}
