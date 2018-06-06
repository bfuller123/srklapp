const express = require("express");
const chatRouter = express();
const path = require("path");

chatRouter.route("/")
    .get(function(req, res){
        // var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
        let ip = req.ip;
        console.log(`ipaddress: ${ip}`);
        res.sendFile(path.join(__dirname,"../public/views/chat.html"));
    });

module.exports = chatRouter;