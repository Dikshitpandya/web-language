let $ = (id) => document.getElementById(id);
// function getId(id)
// {
//     return document.getElementById(id);
// }
// function getSimpleInterest(amount,rate=6,year=1)
// {
//     //put you code here
// }
// let getSimpleInterest = function(amount,rate=6,year=1)
// {
//     //put your code here
// }
//arrow function 
let getSimpleInterest = (amount,rate=6,year=1) => {
    //local variable
    let interest = (amount * rate * year) / 100;
    return interest;

}
/* cookies related functions */
function setCookie(name,value,days=365) 
{
    // calculate date on which cookie will expire
    var d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
function getCookie(name) 
{
    var name = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookies = decodedCookie.split(';');
    for(var i = 0; i <cookies.length; i++) {
      var c = cookies[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
  