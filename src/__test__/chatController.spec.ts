import SocketServer from "../common/socket";
import config from "../common/config";
import { assert } from "chai";
import { io as Client } from "socket.io-client";
import server from "../common/server";
import ChatController from "../controllers/ChatController";

describe("The instance of a controller ", () => {
    let clientSocket1: any, clientSocket2: any;

    before((done) => {
        server();
        let port = config.PORT
        clientSocket1 = Client(`http://localhost:${port}`);
        clientSocket2 = Client(`http://localhost:${port}`);
        clientSocket1.on("connect", done);
    });

    after(() => {
        clientSocket1.close();
        clientSocket2.close();
    });

    it("should handle events", (done) => {
        clientSocket1.emit("sendMessage", "this is my message");

        clientSocket2.on("sendMessage", (arg: any)=>{
            assert.equal(arg, "this is my message");
            done();
        })
    });

});