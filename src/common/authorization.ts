import {server} from "./server"
import {Server, Socket} from "socket.io";
import {ClientToServerEvents, InterServerEvents, ServerToClientEvents} from "./../types/socket"

export default class Authorization {



    static handleUser = ([event, ...args]: [event: string, ...args: any], next: (e?: any )=>void, socket: Socket) => {

        // check the user permission here to send the connection request
        //console.log(socket.request.headers.authorization)

        if (false) {
            return next(new Error("unauthorized action"));
        }
        next();
    }
}