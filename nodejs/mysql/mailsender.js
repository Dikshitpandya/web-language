var nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'frontedmail@gmail.com',
        pass: 'hwzg bzmx lpqb inxr ',
    },
});
transporter.verify().then(console.log).catch(console.error);



// hwzg bzmx lpqb inxr 


transporter.sendMail({
    from: '"fronted mail" <frontedmail@gmail.com>', // sender address
    to: "dikshitpandya1008@gmail.com", // list of receivers
    subject: "Medium @edigleyssonsilva ✔", // Subject line
    text: "There is a new article. It's about sending emails, check it out!", // plain text body
    html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
}).then(info => {
    console.log({ info });
}).catch(console.error);