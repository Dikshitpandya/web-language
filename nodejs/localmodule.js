function getDate()
{
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var fullDate = day + "/" + month + "/" + year;
    return fullDate;
}
function getTime()
{
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var fullTime = hours + ":" + minutes + ":" + seconds;
    return fullTime;
}   
//export is compulasory
module.exports.getTime = getTime;
module.exports.getDate = getDate;=