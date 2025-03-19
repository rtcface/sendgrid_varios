// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
//javascript

import { MailDataRequired } from "@sendgrid/helpers/classes/mail";
require("dotenv").config();
const sgMail = require("@sendgrid/mail");

// remove this after you've confirmed it is working

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const send = (msg: MailDataRequired) => {
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};
