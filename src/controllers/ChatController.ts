import Controller, {Contructor} from "./Controller";
import {Server, Socket} from "socket.io";

export default class ChatController extends Controller{

    constructor(args: Contructor){
        super(args)
        this.socket = args.socket;
        this.io = args.io;
        this.sendMessage()
    }

    sendMessage(){
        this.socket?.on("sendMessage", (message)=>{
            this.io?.emit('sendMessage', message);
        });
    }

}