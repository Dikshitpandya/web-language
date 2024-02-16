var connection = require("./myconnection");
//create query 
var sql = "select id,name from course order by name limit 0,10";
connection.con.query(sql,function(error,result){
    if(error!=null)
    {
        console.log(error.errno,error.message,error.code);
    }
    else 
    {
       let size = result.length;
       for(let index=0;index<size;index++)
       {
            console.log("id = ",result[index].id," name = ",result[index].name);
       }
    }
    connection.con.end();
});