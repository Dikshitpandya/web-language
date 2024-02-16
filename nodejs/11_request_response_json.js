var http = require("http");
var server = http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'application/json'});
    var person = {
        name : "Ankit",
        surname : "Patel",
        age : 38,
        gender : true,
        weight : 75.5
    }
    var data = JSON.stringify(person);
    response.write(data);
    response.end();
});
server.listen(5000);
console.log("Server running 5000");