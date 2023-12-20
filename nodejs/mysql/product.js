var express = require("express")
var mysql = require("./myconnection")
var app = express()
app.use(express.urlencoded({ extended: true }));
//define route for products

//purpose = used to get all product
//url = http://localhost:5000/product
//method = get 
//input : none 

app.get("/product", function (request, response) {
    let sql = "select id,title,price,photo from product order by id desc"
    mysql.con.query(sql, function (error, result) {
        if (error) {
            response.json([{ 'error': 'error occured' }])
        }
        else {
            var size = result.length
            result.unshift({ 'total': size })
            result.unshift({ 'error': 'no' })
            var output = JSON.parse(JSON.stringify(result))
            response.send(output);
        }
    });
});
//purpose = used to get product of given product id
//url = http://localhost:5000/product/1
//method = get 
//input : product's id 


app.get("/product/:id", function (request, response) {
    let id = request.params.id;
    // var sql = "select * from product where id=" + id;
    var sql = `select * from product where id=${id}`;
    mysql.con.query(sql, function (error, result) {
        if (error != null) {
            response.json([{ 'error': 'error occured' }]);
        }
        else {
            var size = result.length;
            // [{"error":"no"},{total:1},{"id":3,"title":"macbook air","price":125000,"photo":"macbook.jpg"},{"id":2,"title":"dell laptop","price":200,"photo":"dell.jpg"},{"id":1,"title":"Acer Laptop","price":100,"photo":"acer.jpg"}]
            result.unshift({ 'total': size });
            result.unshift({ 'error': 'no error' });
            let output = JSON.parse(JSON.stringify(result));
            response.send(output);
        }
    });
});

//purpose = used to delete product of given product id
//url = http://localhost:5000/product/1
//method = delete 
//input : product's id 

app.delete("/product/:id", function (request, response) {
    var id = request.params.id;
    // var sql = "delete from product where id=" + id;
    var sql = `delete from product where id=${id}`;
    mysql.con.query(sql, function (error, result) {
        if (error != null) {
            response.json([{ 'error': 'error occured' }]);
        }
        else {
            response.json([{ 'error': 'no error' }, { 'message': 'product deleted' }]);
        }
    });
});

//purpose = used to insert new product
//url = http://localhost:5000/product
//method = post
//input : categoryid,title,price,stock,weight,size,detail,photo (all input is required)

app.post("/product", function (request, response) {
    //console.log(request.body);
    let categoryid = request.body.categoryid;
    let title = request.body.title;
    let price = request.body.price;
    let photo = request.body.photo;
    let stock = request.body.stock;
    let weight = request.body.weight;
    let size = request.body.size;
    let detail = request.body.detail;
    if (categoryid === undefined || title === undefined || price === undefined || photo === undefined || stock === undefined || weight === undefined || size === undefined || detail === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        let sql = `insert into product (categoryid,title,price,photo,stock,weight,size,detail) values ('${categoryid}','${title}','${price}','${photo}','${stock}','${weight}','${size}','${detail}')`;
        mysql.con.query(sql, function (error, result) {
            if (error != null) {
                response.json([{ 'error': 'error occured' }]);
            }
            else {
                response.json([{ 'error': 'no error' }, { 'message': 'product inserted' }]);
            }
        });
    }
});


//purpose = used to update exiting product
//url = http://localhost:5000/product
//method = put
//input : categoryid,title,price,stock,weight,size,detail,photo,productid (all input is required)

app.put("/product", function (request, response) {
    let categoryid = request.body.categoryid;
    let title = request.body.title;
    let price = request.body.price;
    let photo = request.body.photo;
    let stock = request.body.stock;
    let weight = request.body.weight;
    let size = request.body.size;
    let detail = request.body.detail;
    let productid = request.body.productid;
    if (categoryid === undefined || title === undefined || price === undefined || photo === undefined || stock === undefined || weight === undefined || size === undefined || detail === undefined || productid === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        let sql = `update product set categoryid='${categoryid}',title='${title}',price='${price}',photo='${photo}',stock='${stock}',weight='${weight}',size='${size}',detail='${detail}' where id=${productid}`;
        mysql.con.query(sql, function (error, result) {
            if (error != null) {
                response.json([{ 'error': 'error occured' }]);
            }
            else {
                response.json([{ 'error': 'no error' }, { 'message': 'product updated' }]);
            }
        });
    }
});
app.listen(5000);
console.log('ready to accept request')
