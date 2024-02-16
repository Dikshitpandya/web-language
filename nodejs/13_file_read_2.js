var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    var FileContent = fs.readFileSync('country.html');
    response.write(FileContent);
    response.end();
});
server.listen(5000);
console.log('server started on port 5000');