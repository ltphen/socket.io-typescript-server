// Import the dotenv module to load environment variables from a .env file
import * as dotenv from 'dotenv';

// Load environment variables from the .env file in the current directory
dotenv.config();

// Export an object containing configuration values
export default {
    // The name of the application, with a default value of an empty string
    APP_NAME: process.env.APP_NAME ?? '',

    // A numerical value, possibly used for cryptographic purposes, with a default value of 5
    SALT: parseInt(process.env.SALT ?? '5'),

    // A secret key used for JSON Web Token (JWT) encryption and decryption, with a default value of an empty string
    JWT_SECRET: process.env.JWT_SECRET ?? "",

    // The port on which the application should listen, with a default value of 3000
    PORT: process.env.PORT ?? 3000
}
