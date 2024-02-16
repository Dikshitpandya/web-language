var express = require("express")
var mysql = require("./myconnection");
// var Email = require("./Email");
var pwd = require("./PasswordGenerator"); //local module import as pwd
var app = express();
app.use(express.urlencoded({ extended: true }));

//used to register as users 
//url = http://localhost:5000/users
//method = post
//input : email,password,mobile (all input is required)
app.post("/users", function (request, response) {
    let email = request.body.email;
    let password = request.body.password;
    let mobile = request.body.mobile;
    if (email === undefined || password === undefined || mobile === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        let sql = `select id from users where email='${email}' or mobile='${mobile}'`;
        mysql.con.query(sql, function (error, result) {
            if (error != null) {
                response.json([{ 'error': 'error occured' }]);
            }
            else {
                var size = result.length;
                if (size >= 1) {
                    //email or mobile found
                    response.json([{ 'error': 'no error' }, { 'success': 'no' }, { 'message': 'email or mobile is allready registerd with us' }]);
                }
                else {
                    sql = `insert into users (email,password,mobile) values ('${email}','${password}','${mobile}')`;
                    mysql.con.query(sql, function (error, result) {
                        if (error != null) {
                            response.json([{ 'error': 'error occured' }]);
                        }
                        else {
                            response.json([{ 'error': 'no error' }, { 'success': 'yes' }, { 'message': 'user registerd successfully' }]);
                        }
                    });
                }
            }
        });

    }
});

//used to change password of registered user
//url = http://localhost:5000/users
//method = put
//input : password,newpassword,id (all input is required)
app.put("/users", function (request, response) {
    let password = request.body.password;
    let newpassword = request.body.newpassword;
    let id = request.body.id;
    if (password === undefined || newpassword === undefined || id === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        //all input are given 
        let sql = `select id from users where id='${id}' and password='${password}'`;
        console.log(sql);
        mysql.con.query(sql, function (error, result) {
            if (error != null) {
                response.json([{ 'error': 'error occured' }]);
            }
            else {
                var count = result.length;
                if (count == 0) {
                    response.json([{ 'error': 'no error' }, { 'success': 'no' }, { 'message': 'invalid password' }]);
                }
                else {
                    //id and password match
                    let sql = `update users set password='${newpassword}' where id='${id}'`;
                    mysql.con.query(sql, function (error, result) {
                        if (error != null) {
                            response.json([{ 'error': 'error occured' }]);
                        }
                        else {
                            response.json([{ 'error': 'no error' }, { 'success': 'yes' }, { 'message': 'password changed successfully' }]);
                        }
                    })
                }
            }
        });
    }
});
//used to login as users 
//url = http://localhost:5000/login
//method = post
//email=ankit@gmail.com&password=112233
app.post("/login", function (request, response) {
    let email = request.body.email;
    let password = request.body.password;
    if (email === undefined || password === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        let sql = `select id from users where email='${email}' and password='${password}'`;
        mysql.con.query(sql, function (error, result) {
            if (error != null) {
                response.json([{ 'error': 'error occured' }]);
            }
            else {
                let size = result.length;
                if (size == 0) {
                    //login failed
                    response.json([{ 'error': 'no error' }, { 'success': 'no' }, { 'message': 'invalid username/password' }]);
                }
                else {
                    response.json([{ 'error': 'no error' }, { 'success': 'yes' }, { 'message': 'login successfull' }, { 'id': result[0]['id'] }]);
                }
            }
        });
    }
});

app.post("/forgot-password", function (request, response) {
    let RegisteredEmail = request.body.email;
    let sql;
    if (RegisteredEmail === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        sql = `select id from users where email='${RegisteredEmail}'`;
        mysql.con.query(sql, function (error, result) {
            if (error != null) {
                response.json([{ 'error': 'input is missing' }]);
            }
            else {
                let size = result.length;
                if (size === 0) {
                    response.json([{ 'error': 'no error' }, { 'success': 'no' }, { 'message': 'email not found' }]);
                }
                else {
                    let newpassword = pwd.generatePassword(10);
                    sql = `update users set password='${newpassword}' where email='${RegisteredEmail}'`;
                    mysql.con.query(sql, function (error, result) {
                        if (error != null) {
                            response.json([{ 'error': 'error occured' }]);
                        }
                        else {
                            var email = new Email.mail();
                            var message = `your new password is ${newpassword}`;
                            var subject = 'We have recovered your account';
                            email.send(RegisteredEmail, subject, message);
                            response.json([{ 'error': 'no error' }, { 'success': 'yes' }, { 'message': 'check your email account, we have sent you email' }]);
                        }
                    });
                }
            }
        });
    }

});
app.listen(5000);
console.log("ready to accept request");



// errer ma uper lakhel vacho tema vandho hoy sake che baki all ready che server n rakho taytha restclient on rakho ane ek baju fronted 20.1 on rakhavu baki redi che

//shotcut for off console is "ctrl+c"  che 