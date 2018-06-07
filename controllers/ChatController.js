const express = require("express");
const axios = require("axios");
const chatRouter = express();
const path = require("path");
const key = "?access_key=275b6191b8fb4c1c956473cb31b1f43c&format=1";
const url = "http://api.ipstack.com/";
const fields = "&fields=ip,city,country_code,region_code,zip";
const outputFormat = "&output=json";

chatRouter.route("/")
    .get(function(req, res){
        let ip = "76.184.50.207";
        // let ip = req.ip || req.header('x-forwarded-for') || req.connection.remoteAddress;
        console.log(`ipaddress: ${ip}`);
        res.sendFile(path.join(__dirname,"../public/views/chat.html"));
        getLocation(ip);
    });

function getLocation(ipAddress){
    axios.get(url+ipAddress+key+fields+outputFormat)
        .then(response => {
            console.log(response.data);
        })
}

let processChatMessage =(io) => {
    io.on("connection", (socket) => {
        console.log("a user has connected");
        socket.on("disconnect", () => {
            console.log("a user has disconnected");
        });
        socket.on('chat message', function(msg) {
            console.log('message: ' + msg);
        });
    });
};

module.exports = { chatRouter, processChatMessage };