var event = require('events');
var em = new event.EventEmitter();
var http = require('http'); 
var url = require('url');
var count = 0; //global variable can be access from any function
var isAdd = false; ////global variable can be access from any function
em.addListener('Add',function(devicename){
    console.log('Add device: ' + devicename);
    if(count<3)
    {
        count++;
        console.log('count: ' + count);
        console.log("device: " + devicename + " is added");
        isAdd = true;
    }
    else 
    {
        console.log("device: " + devicename + " can't add");
        isAdd = false;
    }
});
//create another listener 
em.addListener('start',function(devicename){
    console.log(devicename + " has started");
});
var app = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var device = q.device;
    res.write('<h1>Node.js Event Emitter</h1>');
    em.emit('Add', device);
    if(isAdd == true)
    {
        res.write(`<h2>${device} added </h2>`);
        em.emit('start', device);
        res.write(`<h2>${device} started </h2>`);
    }
    else 
    {
        res.write(`<h2>${device} can not be added </h2>`);
    }
    res.end();
});
app.listen(5000);
console.log("Server running");