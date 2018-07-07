var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'pasleno4ka@gmail.com',
        pass: 'zctymrf14'
    }
});

var mailOptions = {
    from: 'pasleno4ka@gmail.com',
    to: 'chaosgum12@gmail.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Hello</h1> как житуха?'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});