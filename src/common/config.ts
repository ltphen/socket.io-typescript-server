import * as dotenv from 'dotenv';
dotenv.config()

export default {
    APP_NAME: process.env.APP_NAME ?? '',
    SALT: parseInt(process.env.SALT ?? '5'),
    JWT_SECRET: process.env.JWT_SECRET ?? "",
    PORT: process.env.PORT ?? 3000
}