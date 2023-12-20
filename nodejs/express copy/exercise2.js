// 2) create node js application that accept request for /player route using get, post, put and delete method. 
//     get route will return list of player as json 
//     post route will insert new player           fs readfile
//     put  route will update particular player  append file
//     delete route will delete particular player 

var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var route = "/player"


var playerlist = [
    { playername: "virat kohli", no: 1, id: "01" },
    { playername: "sachin tendulkar", no: 2, id: "02" },
    { playername: "rohit sharma", no: 3, id: "03" },
    { playername: "siraj", no: 4, id: "04" },
    { playername: "subhman gill", no: 5, id: "05" },
    { playername: "ravindra jadeja", no: 6, id: "06" },
    { playername: "virat kohli", no: 7, id: "07" },
    { playername: "sachin tendulkar", no: 8, id: "08" },
    { playername: "rohit sharma", no: 9, id: "09" },
    { playername: "siraj", no: 10, id: "10" },
    { playername: "subhman gill", no: 11, id: "11" },
    { playername: "ravindra jadeja", no: 12, id: "12" },
];

app.get(route, function (request, response) {
    var temp = JSON.parse(JSON.stringify(playerlist));
    response.send(temp);
});

app.post(route, function (request, response) {

    var server = http.createServer(function (request, response) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        var FileName = 'players.txt';
        var FileContent = " player name = virat kohli no = 1  run totel = 4500";

        fs.writeFile(FileName, FileContent, function (error) {
            if (error != null)
                response.write('File could not be created');
            else
                response.write('File created');
            response.end();
        });
    });
});

app.put(route, function (request, response) {
    response.send("put request received for " + route);
});

app.delete(route, function (request, response) {
    response.send("delete request received for " + route);
});

app.all("*", function (request, response) {
    response.send("page not found");
});

app.listen(5000);
console.log('page rening in port no 5000')