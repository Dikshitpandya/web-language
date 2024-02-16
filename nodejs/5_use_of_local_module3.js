var http = require("http");
var my = require("./localmodule_3");
var server = http.createServer(function(request, response){
    console.log("Request received");
    console.log(my.classname);
    console.log(my.email);
    console.log(my.phone);
    console.log(my.address);
    console.log(my.website);
    let amount = 1000;
    let rate = 5;
    let years = 10;
    let result = my.getInterest(amount,rate,years);
    console.log("Simple Interest: " + result);
    console.log("Compound Interest: " + my.getCompoundInterest(amount,rate,years));
});
server.listen(5000);    
console.log("Server is running on port 5000");