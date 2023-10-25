var http = require("http");
var Triangle = require("./local_module1");
var server = http.createServer(function (request,response) {
    
    //create object of Trinagle class
    let t1 = new Triangle(500,100,25);

    //call getArea() method
    let square = t1.getSquare();
    let qube= t1.getqube();
    let power = t1.getpower();

    //display area
    console.log("square = " + square);
    console.log(" qube =" + qube);
    console.log(" power =" + power);
});
server.listen(5000);
console.log("Server is running at port 5000");


//  getSquare()
// getQube()
// getPower()