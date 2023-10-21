var http = require("http");
const{ relative } = require("path");
const{ receivemessageonport } = require("worker_threads");

var createServer =http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'application/json'});

    console.log("write code this please")


});
server.listen(5000);
console.log("server is running at 5000 code")


