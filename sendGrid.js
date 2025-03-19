const sgMail = require('@sendgrid/mail')

require('dotenv').config();

 // remove this after you've confirmed it is working

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const fs = require("fs");





 const sendEmail = (to, subject, message, attachment_name) => {
   
    pathToAttachment = `${__dirname}/reconocimientos/${attachment_name}`;
    console.log(pathToAttachment);
    attachment = fs.readFileSync(pathToAttachment).toString("base64");
    const html =`<strong>${message}</strong>`
    const msg = {
      to, // Change to your recipient
      from: 'sistemas@saetlax.org', // Change to your verified sender
      subject: subject,
      text: message,
      html,
      attachments: [
        {
          content: attachment,
          filename: "Constancia.png",
          type: "application/png",
          disposition: "attachment"
        }
      ]
    }
    
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)})
  }

  exports.sendEmail = sendEmail;