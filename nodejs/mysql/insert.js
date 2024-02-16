var connection = require("./myconnection");
//create query 
var sql = "insert into course(name,fees,detail,image,iscertified) values ('HTML',7500,'frontend tool','html.png',1)";
connection.con.query(sql,function(error,result){
    if(error!=null)
    {
        console.log(error.errno,error.message,error.code);
    }
    else 
    {
        console.log("No of rows inserted ",result.affectedRows);
        console.log("Inserted row id ",result.insertId);
    }
    connection.con.end();
});