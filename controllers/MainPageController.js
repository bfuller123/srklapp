const express = require("express");
const mainRouter = express();

mainRouter.use(express.static("public"));

mainRouter.route("/")
    .get(function(req, res){
        // var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
        let ip = req.ip;
        console.log(`ipaddress: ${ip}`);
        res.sendFile("/index.html");
    });

module.exports = mainRouter;