import SocketServer from "../common/socket";
import config from "../common/config";
import { assert } from "chai";
import { io as Client } from "socket.io-client";
import server from "../common/server";

describe("the socket server structure ", () => {
    let io: any;
    let serverSocket: any;
    let clientSocket: any;
    let socket = new SocketServer();


    before((done) => {
        server();
        io = socket.getInstance()
        let port = config.PORT
        clientSocket = Client(`http://localhost:${port}`);
        clientSocket.on("connect", ()=>{
            serverSocket = socket.getSocket()
            done()
        });

    });

    after(() => {
        io.close();
        clientSocket.close();
    });

    it("should send and receive events", (done) => {
        clientSocket.on("hello", (arg: any) => {
            assert.equal(arg, "world");
            done();
        });
        serverSocket.emit("hello", "world");
    });

    it("should send and receive events with arguments", (done) => {
        serverSocket.on("hi", (cb: (arg0: string) => void) => {
            cb("hello");
        });
        clientSocket.emit("hi", (arg: any) => {
            assert.equal(arg, "hello");
            done();
        });
    });
});