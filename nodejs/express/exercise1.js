// 1) create middleware that store url, method request date & time into file access.log using middleware.


var express = require('express')
var app = express();
var fs = require('fs');

//define middleware

app.use(function (request, response, next) {
    console.log("i am the first middleware");
    next();
});

app.use(function (request, response, next) {
    console.log("i am the second middleware");
    //create date object
    var date = new Date();
    var today = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    var now = date.getHours() + ":" + date.getMinutes();
    console.log(today);
    console.log(now);
    var hour = date.getHours(); //return hour as number 
    if (hour >= 9 && hour <= 23)
        next();
    else
        response.send("we accept request only between 10 to 5 ");

});

app.use(function (request, response, next) {
    console.log("i am the thired middleware");
    var FileName = 'routehistory.txt'
    var FileContent = (now) + (today);

    fs.writeFile(FileName, FileContent, function (error) {
        if (error != null)
            response.write('File could not be created');
        else
            response.write('File created');
        response.end();
    });
});

app.get("/home", function (request, response) {
    response.send("this is request for home page....");
});


app.get("/product", function (request, response) {
    response.send("this is request for product page....");
});

app.get("/service", function (request, response) {
    response.send("this is request for service page....");
});

app.listen(5000);
console.log("ready to accept request");
