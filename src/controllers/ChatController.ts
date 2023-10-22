import Controller, { Constructor } from "./Controller"; // Import the base Controller class and the Constructor interface
import { Server, Socket } from "socket.io"; // Import the Server and Socket classes from socket.io

// Define a class named ChatController that extends the base Controller class
export default class ChatController extends Controller {

    // Constructor for the ChatController class
    constructor(args: Constructor) {
        super(args); // Call the constructor of the base Controller class and pass the arguments

        // Initialize the 'sendMessage' event handler
        this.sendMessage();
    }

    // Define a method for handling the 'sendMessage' event
    sendMessage() {
        // Listen for the 'sendMessage' event on the current socket
        this.socket?.on("sendMessage", (message) => {
            // Emit the 'sendMessage' event to all connected clients via the io object
            this.io?.emit('sendMessage', message);
        });
    }
}
