import http from 'http';
import {app, applyMiddlewares} from "./app"
import config from "./config";
import SocketServer from "./socket";
declare var global: any;
applyMiddlewares(app)
const availablePort = config.PORT
app.set('port', availablePort);
global.appPort = availablePort;
//console.log(availablePort)
export const server = http.createServer(app);

export default async () => {


    server.on('listening', () => {
        const address = server.address();
        //const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + availablePort;
        new SocketServer();
        //console.log('Listening on ' + bind);
    });

    server.listen(availablePort, ()=>{});

}