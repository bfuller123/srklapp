const express = require("express");
const app = express();
const chat = require("./controllers/ChatController");
const main = require("./controllers/MainPageController");
const http = require("http").Server(app);
const io = require("socket.io")(http);


app.use(express.static("public"));
app.use("/main", main);
app.use("/chat", chat);

app.route("/")
    .get((req, res) => {
        res.sendFile("/index.html");
    });

io.on('connection', function(socket){
    console.log('a user connected');
});

http.listen(3000, ()=> console.log("listening on port 3000!"));