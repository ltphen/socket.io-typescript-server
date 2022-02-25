import {Socket} from "socket.io";
import {Server} from "socket.io";
import SocketServer from "./../common/socket";
import {ClientToServerEvents, InterServerEvents, ServerToClientEvents} from "../types/socket";
export interface Contructor{
    socket: Socket<ServerToClientEvents, ClientToServerEvents, InterServerEvents, any> | undefined,
    io: Server<ServerToClientEvents, ClientToServerEvents, InterServerEvents, any> | undefined
}



export default class Controller {

    protected socket: Socket | undefined;
    protected io: Server | undefined;

    constructor(args: Contructor){
        this.socket = args.socket;
        this.io = args.io;
    }

}
