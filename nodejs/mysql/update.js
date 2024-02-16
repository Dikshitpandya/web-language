var connection = require("./myconnection");
//create query 
var sql = "update course set name='next js',detail='another framework' where id=9";
connection.con.query(sql,function(error,result){
    if(error!=null)
    {
        console.log(error.errno,error.message,error.code);
    }
    else 
    {
        console.log("No of rows updated ",result.affectedRows);
    }
    connection.con.end();
});