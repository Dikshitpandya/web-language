var connection = require("./myconnection");
//create query 
var sql = "delete from course where id=10";
connection.con.query(sql,function(error,result){
    if(error!=null)
    {
        console.log(error.errno,error.message,error.code);
    }
    else 
    {
        console.log("No of rows deleted ",result.affectedRows);
    }
    connection.con.end();
});