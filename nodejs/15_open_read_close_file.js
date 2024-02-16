var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    var filename = 'rastra-geet-2.txt';
    fs.open(filename,'r',function(error,file_handler){
        if(error != null)
        {
            response.write('Error in opening file');
        }
        else 
        {
            //no error in opening file
            let size = 4096
            let buffer = new Buffer(size);
            fs.read(file_handler,buffer,0,size,null,function(error,length){
                if(error != null)
                {
                    response.write('Error in reading file');
                }
                else
                {
                    //no error in reading file
                    response.write("<html><head><meta charset='UTF-8'></head><body>");
                    response.write(buffer.toString('utf8',0,length));
                    response.write('</body></html>');
                }
                fs.close(file_handler,function(error){
                    if(error != null)
                    {
                        response.write('Error in closing file');
                    }
                    else
                    {
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