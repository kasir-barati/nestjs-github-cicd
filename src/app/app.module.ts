import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '@shared/prisma/prisma.module';
import { UserModule } from '@modules/user/user.module';
import { PostModule } from '@src/modules/post/post.module';
import appConfig from './app.config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ['.env', '.postgres.env'],
            cache: true,
            load: [appConfig],
        }),
        PrismaModule,
        UserModule,
        PostModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
