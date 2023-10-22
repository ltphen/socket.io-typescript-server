// Import necessary modules and dependencies
import express, { Express } from 'express'; // Import the Express framework
import cors from 'cors'; // Import the CORS middleware
import morgan from 'morgan'; // Import the Morgan logging middleware
import * as path from 'path'; // Import the 'path' module for file path manipulation
import helmet from 'helmet'; // Import the Helmet middleware for security
import * as dotenv from 'dotenv'; // Import the dotenv module for handling environment variables


// Load environment variables from a .env file if it exists
dotenv.config();

// Create an instance of the Express application
export const app: Express = express();

// Define a function to apply middleware to the Express application
export const applyMiddlewares = (app: Express) => {
    // Apply Morgan middleware for logging in 'dev' mode
    app.use(morgan('dev'));

    // Apply Helmet middleware for enhancing security
    app.use(helmet());

    // Enable CORS (Cross-Origin Resource Sharing)
    app.use(cors());

    // Serve static files from the 'static' directory
    app.use('/static', express.static(path.resolve('static')))

}
