import { Socket } from "socket.io"; // Import the Socket class from socket.io
import { Server } from "socket.io"; // Import the Server class from socket.io
import { ClientToServerEvents, InterServerEvents, ServerToClientEvents } from "../types/socket"; // Import socket event types

// Define an interface for the constructor arguments
export interface Constructor {
    socket: Socket<ServerToClientEvents, ClientToServerEvents, InterServerEvents, any> | undefined;
    io: Server<ServerToClientEvents, ClientToServerEvents, InterServerEvents, any> | undefined;
}

// Define a base class called Controller
export default class Controller {

    protected socket: Socket | undefined;
    protected io: Server | undefined;

    // Constructor for the Controller class
    constructor(args: Constructor) {
        // Initialize the 'socket' and 'io' properties based on the constructor arguments
        this.socket = args.socket;
        this.io = args.io;
    }
}
