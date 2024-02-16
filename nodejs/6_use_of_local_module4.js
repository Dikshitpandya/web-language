var http = require("http");
var my = require("./localmodule_4");
var server = http.createServer(function(request, response){
    console.log("Request received");
    console.log(my.classname);
    console.log(my.email);
    console.log(my.phone);
    console.log(my.address);
    console.log(my.website);
});
server.listen(5000);    
console.log("Server is running on port 5000");