var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('country.html', function (error, FileContent) {
        console.log(error, FileContent)
        if (error != null) {
            response.write("file can not be read");
        }
        else {
            response.write(FileContent);
        }
        response.end();
    });

});
server.listen(5000);
console.log('server started on port 5000');