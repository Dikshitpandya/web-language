var http = require("http");
var url = require("url");
//http://localhost:5000/country.html?state=gujarat&city=bhavnagar
var server = http.createServer(function(request,response){
    var q = url.parse(request.url,true);
    console.log(q);
    var pathname = q.pathname;
    var data = q.query;
    console.log(pathname);
    console.log(data);
    console.log(data.state);
    console.log(data.city);
});
server.listen(5000);
console.log("ready to accept request");