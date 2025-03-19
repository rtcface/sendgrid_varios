const sgMail = require('@sendgrid/mail');

require('dotenv').config();

 // remove this after you've confirmed it is working

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const fs = require("fs");

 const sendEmail = (to, subject, message) => {
   
   /*  pathToAttachment = `${__dirname}/reconocimientos/${attachment_name}`;
    console.log(pathToAttachment);
    attachment = fs.readFileSync(pathToAttachment).toString("base64"); */
    const html =message
    const msg = {
      to:to, // Change to your recipient
      from: 'sistemas@saetlax.org', // Change to your verified sender
      subject: subject,
      text: message,
      html:html/* ,
      attachments: [
        {
          content: attachment,
          filename: "Constancia.png",
          type: "application/png",
          disposition: "attachment"
        }
      ] */
    }
    
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)})
  }





//user_name:'oic@saetlax.org',

 const subject = 'Datos de Acceso de los Micrositios';
 const data_destinatarios=fs.readFileSync('./destinatarios.mock.json','utf-8');
 
 
 
 const destinatarios=JSON.parse(data_destinatarios);
 let contador=0;
 destinatarios.Oic_Municipal.forEach(user => {
  console.log(user)

  const message = `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Acceso al Micrositio del OIC</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f7f7f7;
        margin: 0;
        padding: 0;
      }
      .email-container {
        max-width: 600px;
        margin: 20px auto;
        background-color: #ffffff;
        border: 1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .header {
        background-color: #8b5f50;
        color: #ffffff;
        text-align: center;
        padding: 20px;
      }
      .header h1 {
        margin: 0;
        font-size: 24px;
      }
      .content {
        padding: 20px;
        color: #333333;
      }
      .content p {
        margin: 0 0 10px;
        line-height: 1.5;
      }
      .content a {
        color: #8b5f50;
        text-decoration: none;
        font-weight: bold;
      }
      .credentials {
        background-color: #cfaa95;
        padding: 10px;
        border-radius: 4px;
        margin: 10px 0;
      }
      .credentials p {
        margin: 5px 0;
        font-family: monospace;
        font-size: 16px;
      }
      .footer {
        text-align: center;
        padding: 10px;
        background-color: #94878d;
        color: #ffffff;
        font-size: 12px;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">
        <h1>Datos de Acceso de los Micrositios</h1>
      </div>
      <div class="content">
        <p>Estimado/a <strong>${user.name.toUpperCase()}</strong>,</p>

        <p>
          La Secretaría Ejecutiva del Sistema Anticorrupción del Estado de
          Tlaxcala (SESAET) le informa que ya tiene acceso al Micrositio de Órganos Internos de Control de los Entes Públicos del Estado de Tlaxcala y con el mismo usuario al Micrositio de Ética Pública del Estado de Tlaxcala, disponible en la siguiente URL:
        </p>

        <p>
          <a href="https://oic.saetlax.org" target="_blank"
            >https://oic.saetlax.org</a
          >
        </p>

        <p>Sus credenciales de acceso son las siguientes:</p>
        <div class="credentials">
          <p><strong>Usuario:</strong> ${user.user_name}</p>
          <p><strong>Contraseña:</strong> t3mp0r4l </p>
        </div>

        <p>
          Por favor, acceda al sistema a la brevedad, para mayor información por favor consulte los siguiente tutoriales: <a href="https://youtu.be/2e95akDQFlI?feature=shared" target="_blank">Micrositio de Ética Publica</a> y <a href="https://youtu.be/VuO16SJzv4Y?feature=shared" target="_blank">Micrositio de OIC</a>. Si tiene alguna duda o requiere
          asistencia, no dude en contactarnos.
        </p>       
        
      </div>
      <div class="footer">
        Secretaría Ejecutiva del Sistema Anticorrupción del Estado de Tlaxcala –
        SESAET<br />
        Este correo es generado automáticamente, por favor no responda a este
        mensaje.
      </div>
    </div>
  </body>
</html>
` 
     sendEmail(user.to,subject,message);
     contador=contador+1;
     
 });
 console.log(`Total de correos procesados${contador}`)

