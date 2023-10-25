var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    var filename = 'rasta-geet.txt';
    fs.open(filename, 'r', function (error, file_handler) {
        if (error != null) {
            response.write('Error in opening file');
        }
        else {
            //no error in opening file
            let size = 4096
            let buffer = new Buffer(size);
            fs.unlink('rasta-geet.txt', function (error) {
                if (error != null) {
                    response.write('file could not be delate');
                }
                else {
                    //no error in reading file
                    console.log('file delated succesfully')
                }
                fs.close(file_handler, function (error) {
                    if (error != null) {
                        response.write('Error in closing file');
                    }
                    else {
                        //no error in closing file
                        response.end();
                    }
                });
            });
        }
    });
});
server.listen(5000);
console.log('server started on port 5000');
console.log('server and all are rady')