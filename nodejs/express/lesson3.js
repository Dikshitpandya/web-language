var express = require('express');
var app = express();
var route = "/contact"
var portno = 5000;
//define get route 

app.get(route,function(request,response){
    response.send("get request received for " + route);
});

app.post(route,function(request,response){
    response.send("post request received for " + route);
});

app.put(route,function(request,response){
    response.send("put request received for " + route);
});

app.delete(route,function(request,response){
    response.send("delete request received for " + route);
});

app.all("*",function(request,response){
    response.send("page not found");
});

app.listen(portno,function(error){
    if(error!=null)
        console.log(error);
    else 
        console.log("ready to accept request....");
});