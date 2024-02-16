module.exports.classname = "the easylearn academy";
module.exports.email = "info@theeasylearnacademy.com";
module.exports.phone = "1234567890";
module.exports.address = "123, abc street, xyz city, state, country";
module.exports.website = "www.theeasylearnacademy.com"; 
//export function 
module.exports.getInterest = function(amount,rate,years){
    return (amount*rate*years)/100;
};
module.exports.getCompoundInterest = function(amount,rate,years){
    return amount * Math.pow((1 + rate/100), years);
}