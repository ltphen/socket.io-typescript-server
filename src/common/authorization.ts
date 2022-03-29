import {Socket} from "socket.io";

export default class Authorization {



    static handleUser = ([event, ...args]: [event: string, ...args: any], next: (e?: any )=>void, socket: Socket) => {

        // check the user permission here to send the connection request
        //console.log(socket.request.headers.authorization)
        next();
    }
}