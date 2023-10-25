var http = require("http");
var server = http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'application/json'});
    var f1 = {
        name: "ravi",
        surename: "patel",
        gender: "true",
        email: "www.ravi1711@gmail.com"
    }
    var f2 = {
        name: "dikshit",
        surename: "joshi",
        gender: "true",
        email: "www.dikshit1008@gmail.com"
    }
    var f3 = {
        name: "jaydip",
        surename: "vyas",
        gender: "true",
        email: "www.jaydipvyas7788@gmail.com"
    }
    var f4 = {
        name: "paras",
        surename: "panot",
        gender: "true",
        email: "www.paraspanot1711@gmail.com"
    }
    var f5 = {
        name: "harsh",
        surename: "bariya",
        gender: "true",
        email: "www.harshbariya711@gmail.com"
    }
    var course = [f1,f2,f3,f4,f5];
    var data = JSON.stringify(course);
    response.write(data);
    response.end();
});
server.listen(5000);
console.log("Server running 5000");