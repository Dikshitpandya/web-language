var event = require('events');
var em = new event.EventEmitter();
var http = require('http'); 
var url = require('url');
var add = function(devicename)
{
    console.log('Added device: ' + devicename);
}
//create server 
em.addListener('Add', add);
var count = 0;
var app = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(request.url, true).query;
    var device = q.device;
    response.write('<h1>Node.js Event Emitter</h1>');
    //set listener for add event 
    //call add function
    em.emit('Add', device);
    count++;
    response.write("Count = " + count);
    if(count>=3)
        em.removeListener("add",add);
    response.end();

});
app.listen(5000);
console.log("Server running");