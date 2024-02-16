var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    var FileName = 'rastra-geet-2.txt';
    // var FileContent = "जन गण मन अधिनायक जय हे, \n भारत भाग्य विधाता, \n पंजा सिन्धु गुजरात मराठा, \n द्राविड़ उत्कल बंग, \n विंध्य हिमाचल यमुना गंग, \n उच्छल जलधि तरंग, \n तव शुभ नामे जागे, \n तव शुभ आशिष मांगे, \n गाहे तव जय गाथा, \n जन गण मंगलदायक जय हे, \n भारत भाग्य विधाता, \n जय हे! जय हे! जय हे!";
    var FileContent = "\n 1234567890";
    fs.appendFileSync(FileName, FileContent);
    response.write('File appended');
    response.end();
});
server.listen(5000);
console.log('server started on port 5000');