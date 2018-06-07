let io = require("socket.io");

const ioUtil = {
    processChatMessage: function(http){
        io = io(http);
        io.on("connection", (socket) => {
            console.log("a user has connected");
            socket.on("disconnect", () => {
                console.log("a user has disconnected");
            });
            socket.on('chat message', function(msg) {
                console.log('message: ' + msg);
            });
        });
    }
};

module.exports = ioUtil;