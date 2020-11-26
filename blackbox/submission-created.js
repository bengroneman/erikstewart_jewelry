// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async event => {
  const email = JSON.parse(event.body).payload.email
  console.log(email);
  const msg = {
    to: 'bluegroneman10@gmail.com',
    from: 'hello@bluedojo.dev',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg)
    .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  });
}

