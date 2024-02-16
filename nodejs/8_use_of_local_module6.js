var http = require("http");
var Triangle = require("./localmodule_6");
var server = http.createServer(function (request,response) {
    
    //create object of Trinagle class
    let t1 = new Triangle(10,20);
    //call getArea() method
    let area = t1.getArea();
    //display area
    console.log("Area of triangle is " + area);
});
server.listen(5000);
console.log("Server is running at port 5000");