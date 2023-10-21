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