var http = require("http");
var my = require("./localmodule");
var server = http.createServer(function (request, response) {
    console.log("I got your request.....");
    console.log(my.getDate());
    console.log(my.getTime());
});
server.listen(5000);
console.log("Server is running on port 5000");