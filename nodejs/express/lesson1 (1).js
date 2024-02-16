var express = require('express');
var app = express();
//define routes 
app.get("/",function(request,response){
    response.send(`<h1>State of india</h1><ul><li>Andhra Pradesh</li>
    <li>Arunachal Pradesh</li>
    <li>Assam</li>
    <li>Bihar</li>
    <li>Chhattisgarh</li>
    <li>Goa</li>
    <li>Gujarat</li>
    <li>Haryana</li>
    <li>Himachal Pradesh</li>
    <li>Jharkhand</li>
    <li>Karnataka</li>
    <li>Kerala</li>
    <li>Madhya Pradesh</li>
    <li>Maharashtra</li>
    <li>Manipur</li>
    <li>Meghalaya</li>
    <li>Mizoram</li>
    <li>Nagaland</li>
    <li>Odisha</li>
    <li>Punjab</li>
    <li>Rajasthan</li>
    <li>Sikkim</li>
    <li>Tamil Nadu</li>
    <li>Telangana</li>
    <li>Tripura</li>
    <li>Uttar Pradesh</li>
    <li>Uttarakhand</li>
    <li>West Bengal</li>
    <li>Jammu and Kashmir</li>
    <li>Ladakh</li>
    <li>Puducherry</li>
    <li>Chandigarh</li>
    <li>Lakshadweep</li>
    <li>Dadra and Nagar Haveli and Daman and Diu</li></ul>`);

//define route for gujarat
    app.get("/gujarat",function(reuqest,response){
        response.send(`<h1>Gujarat</h1><p>ગુજરાત રાજ્ય, ભારતનું એક પ્રમુખ રાજ્ય છે જે પશ્ચિમ ભારતની તટનો પાસે સ્થિત છે. આ રાજ્ય મહાત્મા ગાંધીનું જન્મસ્થળ છે અને આપણે ગુજરાતી ભાષાનું વારસો પામીએ છીએ. ગુજરાત એક પ્રાચીન સ્થળ છે, જે સંસ્કૃતી, વ્યાપાર, અને કલાની સાકષર કરે છે. આ રાજ્યમાં સૂરત, અહમદાબાદ, રાજકોટ, ભાવનગર, અને વડોદરા જેવા મહત્વના શહેરો છે. ગુજરાતની વસ્તી મજબૂત છે અને આપણે વેપાર, ઉદ્યોગ, ખોરાક અને સાંસ્કૃતિક સ્થળોને આનંદ કરી શકીએ.</p>`)
    });

    //define route for rajasthan
    app.get("/punjab",function(reuqest,response){
        response.send("<h1>Punjab</h1><p>ਪੰਜਾਬ ਪ੍ਰਾਂਤ ਭਾਰਤ ਦਾ ਏਕ ਮਹਤਵਪੂਰਨ ਰਾਜ ਹੈ, ਜੋ ਸਿੱਖਾਂ ਦਾ ਮੂਲ ਸਥਾਨ ਹੈ ਅਤੇ ਹੁਣ ਆਪਣੇ ਸਿੱਖ ਵਿਚੋਂ ਗਰਮੀ ਨਾਲ ਸਿਖਿਆ ਜਾਂਦਾ ਹੈ। ਇਸ ਪ੍ਰਾਂਤ ਦਾ ਸੁਰੱਖਿਆ, ਖੇਤੀ ਅਤੇ ਵਣਜ਼ਾਰੀ ਵਾਪਾਰ ਨਾਲ ਉਦੋਮਾਣ ਹੈ, ਅਤੇ ਇਸਦੀ ਸਾਂਸਕ੍ਰਿਤਿਕ ਧਰਮ, ਭੋਜਨ ਅਤੇ ਬੋਲਚਾਲ ਦਾ ਏਕ ਵਿਸ਼ੇਸ਼ ਅਤੇ ਸੁੰਦਰ ਵਾਰਸ ਹੈ। ਪੰਜਾਬ ਦੇ ਮੁੁਖੀ ਸ਼ਹਿਰ ਚੰਡੀਗੜ੍ਹ ਹੈ, ਜੋ ਆਪਣੇ ਵਿਕਾਸ, ਵਿਦਿਆ ਸਥਾਨਾਂ, ਅਤੇ ਸਰਕਾਰੀ ਕਾਮਾਂ ਦੇ ਲਈ ਪਰਸਿਦ੍ਧ ਹੈ। ਪੰਜਾਬ ਦੀ ਸਾਂਸਕ੍ਰਿਤਿਕ ਵਿਰਾਸਤ ਵਿਚ ਬੈਸਕੋ ਦਾ ਅਤੇ ਬੱਲੇ-ਬੱਲੇ ਗੀਤਾਂ ਦਾ ਮਹਤਵਪੂਰਣ ਸਥਾਨ ਹੈ।</p>")
    });

})
app.listen(5000);
console.log("Ready to accept request");