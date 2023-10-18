var http=require("http");
const { relative } = require("path");
const { receiveMessageOnPort } = require("worker_threads");
var createServer =http.createServer(function(request,response){
   response.writeHead(200,{'content-type':'application/json'});
   var f1={
        name:"ravi",
        surename:"patel",
        gender:"true",
        email:"www.ravi1711@gmail.com"
   }
   var f2={
    name:"dikshit",
    surename:"joshi",
    gender:"true",
    email:"www.dikshit1008@gmail.com"
}
   var f3={
        name:"jaydip",
        surename:"vyas",
        gender:"true",
        email:"www.jaydipvyas7788@gmail.com"
   }
   var f1={
    name:"paras",
    surename:"panot",
    gender:"true",
    email:"www.paraspanot1711@gmail.com"
}
var f1={
    name:"harsh",
    surename:"bariya",
    gender:"true",
    email:"www.harshbariya711@gmail.com"
}
});
server.listen(5000);
console.log("server is running at 5000 code")