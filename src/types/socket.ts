// Define interfaces for different types of socket events

// ServerToClientEvents interface for events sent from the server to the client
export interface ServerToClientEvents {
    // Define an event named 'sendMessage' that expects a message (string) as an argument
    sendMessage: (message: string) => void;

    // Define an event named 'basicEmit' that expects a number, a string, and a Buffer as arguments
    basicEmit: (a: number, b: string, c: Buffer) => void;

    // Define an event named 'withAck' that expects a string and a callback function as arguments
    withAck: (d: string, callback: (e: number) => void) => void;
}

// ClientToServerEvents interface for events sent from the client to the server
export interface ClientToServerEvents {
    // Define an event named 'hello' that doesn't require any arguments
    hello: () => void;
}

// InterServerEvents interface for events exchanged between different server instances
export interface InterServerEvents {
    // Define an event named 'ping' that doesn't require any arguments
    ping: () => void;
}

// Define a SocketData interface for a custom data structure
export interface SocketData {
    // Define properties for the 'name' (string) and 'age' (number) of the data
    name: string;
    age: number;
}
