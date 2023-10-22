// Import the 'http' module, which is used to create an HTTP server
import http from 'http';

// Import the 'app' and 'applyMiddlewares' functions from a module located in './app'
import { app, applyMiddlewares } from "./app";
import config from "./config";
import SocketServer from "./socket";
declare var global: any;

// Apply middlewares to the 'app' (Express application)
applyMiddlewares(app);

// Get the available port from the 'config' object
const availablePort = config.PORT;

// Set the 'port' property of the 'app' to the available port
app.set('port', availablePort);

// Set the global variable 'appPort' to the available port
global.appPort = availablePort;

// Create an HTTP server using the 'app' (Express application)
export const server = http.createServer(app);

export default async () => {
    // Event listener for when the server is listening
    server.on('listening', () => {
        const address = server.address();
        // Log the server address (e.g., 'Listening on port 3000')
        
        // Initialize a new instance of the 'SocketServer' class
        new SocketServer();
    });

    // Start the server, and listen on the specified port
    server.listen(availablePort, () => {});
}
