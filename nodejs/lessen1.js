var http = require ("http");
var my = require ("./lessen_1");
var server = http.createServer(function (request,response){
    console.log("server reade");
    console.log(my.classname);
    console.log(my.email);
    console.log(my.phone);
    
    console.log(my.website);
});
server.listen(5000);
console.log("server is running in port no=5000");