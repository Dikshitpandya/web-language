var http = require("http");
var server = http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'application/json'});
    var reactjs = {
        name : "reactjs",
        duration : "60"
    }
    var nodejs = {
        name : "nodejs",
        duration : "30"
    }
    var mysql = {
        name : "mysql",
        duration : "10"
    }
    var course = [reactjs,nodejs,mysql];
    var data = JSON.stringify(course);
    response.write(data);
    response.end();
});
server.listen(5000);
console.log("Server running 5000");