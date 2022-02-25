import {server} from "./server"
import {Server, Socket} from "socket.io";
import {ClientToServerEvents, InterServerEvents, ServerToClientEvents} from "./../types/socket"
import Authorization from "./authorization";
import ChatController from "../controllers/ChatController";

export default class SocketServer {

    /**
     * we register all our controller here
      */
    private socketHandlers = [ChatController]


    private static instance: Server;
    private static socket: Socket<ServerToClientEvents, ClientToServerEvents, InterServerEvents, any>;

    constructor() {
        if (!SocketServer.instance) {
            let io = new Server(server);
            io.on("connection", (socket)=>{

                // globals socket middlewares

                socket.use((args, next)=>Authorization.handleUser(args, next, socket));
                socket.on("error", (err)=>this.handleErrors(err, socket));

                // handle socket instantiations

                this.socketHandlers.forEach(instance=>new instance({socket, io}))
                SocketServer.socket = socket;

            })
            SocketServer.instance = io
        }
    }

    getInstance(): Server {
        return SocketServer.instance;
    }

    getSocket(): Socket {
        return SocketServer.socket;
    }

    handleErrors = (err: Error, socket: Socket) => {
        // handle global errors here
        if (err && err.message === "unauthorized action") {
            socket.disconnect();
        }
    }

}