import {Socket} from "socket.io";
import {Server} from "socket.io";
import SocketServer from "./../common/socket";
import {ClientToServerEvents, InterServerEvents, ServerToClientEvents} from "../types/socket";
export interface Contructor{
    socket: Socket<ServerToClientEvents, ClientToServerEvents, InterServerEvents, any> | undefined,
    io: Server<ServerToClientEvents, ClientToServerEvents, InterServerEvents, any> | undefined
}



// This is not used at the moment

export default class Controller {

    protected socket: Socket | undefined;
    protected io: Server | undefined;

    constructor(args: Contructor){

    }

}