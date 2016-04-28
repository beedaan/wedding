var config = require('config');
var nodemailer = require('nodemailer');

var emailService = {
    'sendEmail': function (rsvp) {
        if (config.get('smtpUri')) {
            console.log('sending email');

            var transporter = nodemailer.createTransport(config.get('smtpUri'));

            var mailOptions = {
                from: '"notice" <notice@kaitlinandbrendan.com>',
                to: 'bheussler@gmail.com, kaitlinkehl@gmail.com', // list of receivers
                subject: '⚓ Wedding Rsvp ⚓',
                text: "name: " + rsvp.name + "\nemail: " + rsvp.email + "\nattend: " + rsvp.attend,
                html: "<p><b>name: </b>" + rsvp.name + "<br>" +
                "<b>email: </b>" + rsvp.email + "<br>" +
                "<b>attend: </b>" + rsvp.attend + "</p>"
            };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: ' + info.response);
            });
        }
    }
};

module.exports = emailService;