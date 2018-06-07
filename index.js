const express = require("express");
const app = express();
const chat = require("./controllers/ChatController");
const main = require("./controllers/MainPageController");
const http = require("http").Server(app);

app.use(express.static("public"));
app.use("/main", main);
app.use("/chat", chat.chatRouter);

app.route("/")
    .get((req, res) => {
        res.sendFile("/index.html");
    });

chat.setupIO(http);

http.listen(3000, ()=> console.log("listening on port 3000!"));