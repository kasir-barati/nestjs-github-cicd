import {
    IsBoolean,
    IsEnum,
    IsInt,
    IsNumber,
    IsOptional,
    IsString,
    validateSync,
} from 'class-validator';
import { plainToClass } from 'class-transformer';
import { registerAs } from '@nestjs/config';

import { NodeEnv } from '@shared/types/node-env.type';
import { AppConfigs } from './app.type';

export default registerAs('appConfigs', (): AppConfigs => {
    const validatedEnvs = validate(process.env);

    return {
        apiVersion: validatedEnvs.API_VERSION,
        applicationName: validatedEnvs.APPLICATION_NAME,
        nodeEnv: validatedEnvs.NODE_ENV,
        host: validatedEnvs.APP_HOST,
        port: validatedEnvs.SERVER_PORT,
        baseUrl:
            validatedEnvs.APP_HOST + ':' + validatedEnvs.SERVER_PORT,
        databaseUrl: validatedEnvs.DATABASE_URL,
        swagger: validatedEnvs.SWAGGER,
    };
});

class EnvironmentVariables {
    @IsNumber()
    API_VERSION: number;

    @IsOptional()
    @IsString()
    APPLICATION_NAME?: string = 'touriper';

    @IsEnum(NodeEnv)
    NODE_ENV: NodeEnv;

    @IsString()
    APP_HOST: string;

    @IsInt()
    SERVER_PORT: number;

    @IsString()
    DATABASE_URL: string;

    @IsBoolean()
    SWAGGER: boolean;
}

function validate(config: Record<string, unknown>) {
    const validatedConfigs = plainToClass(
        EnvironmentVariables,
        config,
        {
            enableImplicitConversion: true,
        },
    );
    const validatedConfigsErrors = validateSync(validatedConfigs, {
        skipMissingProperties: false,
    });

    if (validatedConfigsErrors.length > 0) {
        console.dir({
            errors: validatedConfigsErrors.map((error) => ({
                value: error.value,
                property: error.property,
                message: Object.values(error.constraints!)[0],
            })),
            errorCode:
                'required_environment_variables_loading_failed',
            message:
                'Application could not load required environment variables',
        });
        throw new Error(validatedConfigsErrors.toString());
    }

    return validatedConfigs;
}
