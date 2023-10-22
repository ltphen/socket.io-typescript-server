import { server } from "./server"; // Import the HTTP server created with Express
import { Server, Socket } from "socket.io";
import { ClientToServerEvents, InterServerEvents, ServerToClientEvents } from "./../types/socket"; // Import socket event types
import Authorization from "./authorization"; // Import the Authorization class
import ChatController from "../controllers/ChatController"; // Import the ChatController

export default class SocketServer {

    /**
     * Register controllers to handle socket events here
     */
    private socketHandlers = [ChatController]; // Define an array of controllers (e.g., ChatController)

    private static instance: Server;
    private static socket: Socket<ServerToClientEvents, ClientToServerEvents, InterServerEvents, any>;

    constructor() {
        if (!SocketServer.instance) {
            let io = new Server(server); // Create a socket.io server instance

            io.on("connection", (socket) => {

                // Global socket middlewares
                socket.use((args, next) => Authorization.handleUser(args, next, socket)); // Apply user authorization middleware
                socket.on("error", (err) => this.handleErrors(err, socket)); // Handle socket errors

                // Handle socket instantiations for each registered controller
                this.socketHandlers.forEach(instance => new instance({ socket, io }));
                SocketServer.socket = socket;

            });

            SocketServer.instance = io; // Store the socket.io instance as a static property
        }
    }

    // Get the instance of the socket.io server
    getInstance(): Server {
        return SocketServer.instance;
    }

    // Get the socket object
    getSocket(): Socket {
        return SocketServer.socket;
    }

    // Handle global errors
    handleErrors = (err: Error, socket: Socket) => {
        // Handle global errors here, such as unauthorized actions
        if (err && err.message === "unauthorized action") {
            socket.disconnect();
        }
    }
}
