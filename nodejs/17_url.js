var http = require("http");
var url = require("url");
var fs = require("fs");
//http://localhost:5000/asia.html
//http://localhost:5000/europe.html
//http://localhost:5000/afferica.html
var server = http.createServer(function(request,response){
    var q = url.parse(request.url,true);
    var pathname = q.pathname; // ./asia.html
    pathname = pathname.substring(1);
    console.log(pathname);
    fs.readFile(pathname,function(error,FileContent){
        if(error!=null) //there is error 
        {
            response.writeHead(404,{'content-type':'text/html'});
            response.write("file not found");
            response.end();
        }
        else 
        {
            response.writeHead(200,{'content-type':'text/html'});
            response.write(FileContent);
            response.end();
        }
    });
});
server.listen(5000);
console.log("ready to accept request");