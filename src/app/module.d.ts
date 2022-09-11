namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: string;
        DATABASE_URL: string;
        SERVER_PORT: string;
        APP_HOST: string;
        SWAGGER: boolean;
        API_VERSION: number;
        APPLICATION_NAME: string;
        CORS_ORIGIN: string;
    }
}
