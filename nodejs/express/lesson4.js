var express = require('express');
var app = express();
var route = "/product"
var portno = 5000;
//define get route 
var productlist = [
    { productName: "Product 1", price: 10.99, quantity: 5, id: 1 },
    { productName: "Product 2", price: 15.49, quantity: 3, id: 2 },
    { productName: "Product 3", price: 7.99, quantity: 10, id: 3 },
    { productName: "Product 4", price: 22.99, quantity: 2, id: 4 },
    { productName: "Product 5", price: 5.99, quantity: 8, id: 5 },
    { productName: "Product 6", price: 12.99, quantity: 6, id: 6 },
    { productName: "Product 7", price: 18.99, quantity: 4, id: 7 },
    { productName: "Product 8", price: 9.99, quantity: 7, id: 8 },
    { productName: "Product 9", price: 14.99, quantity: 3, id: 9 },
    { productName: "Product 10", price: 11.49, quantity: 9, id: 10 }
  ];
//127.0.0.1:5000/product
app.get(route,function(request,response){
    //convert productlist as json string
    var temp = JSON.parse(JSON.stringify(productlist));
    response.send(temp); //return json formatted output
});
//127.0.0.1:5000/product/1
app.get(route + "/:productid",function(request,response){
    var productid = request.params.productid;
    //filter productlist based on productid
    var temp = productlist.filter(function(item){
        return item.id == productid;
    });
    var result = JSON.parse(JSON.stringify(temp));
    //return json formatted output
    response.send(result);
});

app.listen(portno,function(error){
    if(error!=null)
        console.log(error);
    else 
        console.log("ready to accept request....");
});