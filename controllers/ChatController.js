const express = require("express");
const axios = require("axios");
const path = require("path");
const ioUtil = require("./util/socketIOutil");
const chatRouter = express();
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

function setupIO(http){
    ioUtil.processChatMessage(http);
}

module.exports = { chatRouter, setupIO };