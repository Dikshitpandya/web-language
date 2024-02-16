var http = require("http");
var person = require("./localmodule_5");
var server = http.createServer(function(request, response){
    var p = new person("Raj","Mahesh","desai");
    console.log(p.fullname());
    console.log(p.shortname());
});
server.listen(5000);    
console.log("Server is running on port 5000");