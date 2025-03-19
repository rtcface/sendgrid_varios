import { jsPDF } from "jspdf";

import { send } from "./send";

// You'll need to make your image into a Data URL
// Use http://dataurl.net/#dataurlmaker
// letvar doc = new jsPDF()

// doc.setFontSize(40)
// doc.text(35, 25, 'Paranyan loves jsPDF')
// doc.addImage(imgData, 'JPEG', 15, 40, 180, 160)

let imgData: string;
const msj = "that is my code";
imgData = "./img/f.png";
// imgData = '';

const doc = new jsPDF({
  orientation: "portrait",
  unit: "in",
  format: [4, 2],
});

const imag = doc.addImage(imgData, "JPEG", 15, 40, 180, 160);
doc.text(msj, 1, 1);
doc.save("./two-by-four.pdf");

const a: string = msj;
console.log(a, imag);

const msg = {
  to: "rtcface@gmail.com", // Change to your recipient
  from: "rtcface@gmail.com", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

send(msg);
