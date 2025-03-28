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

 const subject = 'Invitación a la Primera Sesión Ordinaria del Sistema Anticorrupción del Estado de Tlaxcala';
 const data_destinatarios=fs.readFileSync('./data_Destinatarios/destinatarios_bloque_3.json','utf-8');
 
 
 
 const destinatarios=JSON.parse(data_destinatarios);
 let contador=0;
 destinatarios.entes.forEach(user => {
  console.log(user)
 
  let data=`${user.id}-${user.name}-${user.ente_publico}-${user.ente_publico}`;

  const message = `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Primera Sesión Ordinaria del Sistema Anticorrupción del Estado de Tlaxcala</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        color: #333;
      }
      .container {
        width: 600px;
        margin: 20px auto;
        background-color: rgba(255, 255, 255, 0.95);
        border: 1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .header {
        padding: 30px;
        background-color: rgba(
          92,
          26,
          87,
          0.85
        ); /* Color morado oscuro con transparencia */
        color: white;
        text-align: center;
      }
      .header h1 {
        margin: 0;
        font-size: 22px;
      }
      .header p {
        margin: 5px 0 0;
        font-size: 14px;
      }
      .content {
        padding: 20px;
      }
      .content h2 {
        color: #5c1a57;
        margin-top: 0;
      }
      .content p {
        line-height: 1.5;
        margin: 10px 0;
      }
      .qr-section {
        margin-top: 20px;
        text-align: center;
        font-weight: bold;
        color: #d9534f;
      }
      .footer {
        background-color: #f7f7f7;
        padding: 10px;
        text-align: center;
        font-size: 12px;
        color: #666;
      }
      .logo-space {
        text-align: center;
        margin-top: 15px;
      }
      .logo-space img {
        max-width: 150px;
      }
      .banner {
        width: 560px;
        height: 350px;
      }
      .qr-container {
        margin: 20px;
        text-align: center;
      }
      .qr-container img {
        width: 150px;
        height: 150px;
        border: 2px solid #ceaa95; /* Borde en tono claro */
        padding: 5px;
        border-radius: 8px;
      }

      .note {
        margin: 25px;
        font-size: 0.9em;
        font-weight: bold;
        color: #FF0000; /* Color claro */
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>¡Te esperamos...!</h1>
        <p>
           Primera Sesión Ordinaria del Sistema Anticorrupción del Estado de Tlaxcala. 
        </p>
      </div>
      <div class="content">
        <img src="https://saetlax.org/wp-content/uploads/2025/03/Sesion_Ordinaria_ok.png" alt="Banner" class="banner" />

        <p>Estimado(a) <b>${user.name}</b> le
          recordamos que El
          <b>Sistema Anticorrupción del Estado de Tlaxcala</b> le extiende una
          cordial invitación para asistir a la <b>Primera Sesión Ordinaria del Sistema Anticorrupción del Estado de Tlaxcala.</b> 
        Agradecemos de antemano su presencia y participación en este importante evento. 
        </p>

        <p class="note">
          Ademas de contar el dia de la sesión con su código QR para su
          registro.
        </p>

        <h2>Detalles del Evento</h2>
         
        <p><strong>Fecha:</strong> 25 de marzo del año en curso</p>
        <p><strong>Hora:</strong> 10:00 horas</p>
        <p>
          <strong>Ubicación:</strong> Teatro Xicohténcatl
        </p>
        <p>
          <strong>Dirección:</strong> Avenida Benito Juárez 21, Centro, 90000 Tlaxcala de Xicohténcatl, Tlaxcala.
        </p>
      </div>
      <div class="qr-container">
        <img src="https://image-charts.com/chart?chs=550x550&cht=qr&choe=UTF-8&chl=${data}" alt="Código QR" />
        <p class="note">
          Es muy importante presentar este código QR a la entrada para agilizar
          el acceso al evento.
        </p>
      </div>

      <div class="footer">
        Este correo fue generado por la Secretaría Ejecutiva del Sistema
        Anticorrupción del Estado de Tlaxcala.
      </div>
    </div>
  </body>
</html>` 
     sendEmail(user.to,subject,message);
     contador=contador+1;
     
 });
 console.log(`Total de correos procesados${contador}`)


 
