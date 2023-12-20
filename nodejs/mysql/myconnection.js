var mysql = require("mysql");
var con = mysql.createConnection({
    host:'localhost',
    port: 3308,
    user : 'root',
    password : '',
    database: 'frontend20.1'
});
con.connect(function(error){
    if(error)
        console.log(error.code,error.errno,error.message);
    else 
        console.log("connection established....");
});
module.exports.con = con;