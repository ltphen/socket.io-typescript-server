import express, { Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import * as path from 'path';
import helmet from 'helmet';
import * as dotenv from 'dotenv';


declare var global: any;

dotenv.config();

export const app: Express = express();

export const applyMiddlewares = (app : Express) => {

    //Debugger --dev
    app.use(morgan('dev'));

    // Security Filter
    app.use(helmet());

    // enable CORS - Cross Origin Resource Sharing
    app.use(cors());


    // server static files
    app.use('/static', express.static(path.resolve('static')));


    //Routes inclusion
    //const routing = express();


}