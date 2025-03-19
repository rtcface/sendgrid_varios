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


 
/*  destinatario.forEach(user => {
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
        <h1>Acceso al los Micrositios Sesaet</h1>
      </div>
      <div class="content">
        <p>Estimado/a <strong>${user.name.toUpperCase()}</strong>,</p>

        <p>
          La Secretaría Ejecutiva del Sistema Anticorrupción del Estado de
          Tlaxcala (SESAET) le informa que ya tiene acceso al Sistema de
          Administración de los Micrositios Sesaet, disponible en la siguiente URL:
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
          Por favor, acceda al sistema a la brevedad y siga las indicaciones
          proporcionadas en el vídeo tutorial disponible en la siguiente URL: <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">https://www.youtube.com/watch?v=dQw4w9WgXcQ</a>. Si tiene alguna duda o requiere
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
 }); */


/*  [
  {
   "name": "victoria flores pérez",
   "to": "contraloria.nanacamilpa2024@gmail.com",
   "attachment_name": "Constancia_Victoria_Flores_Pérez.png"
  },
  {
   "name": "yazmin sánchez",
   "to": "yfdezlara@gmail.com ",
   "attachment_name": "Constancia_Yazmin_Sánchez_Fernández_de_Lara.png"
  },
  {
   "name": "tomás mire aguayo",
   "to": "cp_mire@hotmail.com",
   "attachment_name": "Constancia_Tomás_Mire_Aguayo.png"
  },
  {
   "name": "azucena vázquez hernández",
   "to": "susivazher1989@gmail.com",
   "attachment_name": "Constancia_Azucena_Vázquez_Hernández.png"
  },
  {
   "name": "an-ki vasquez herrera",
   "to": "an-ki_vasquezh@hotmail.com",
   "attachment_name": "Constancia_An-ki_Vásquez_Herrera.png"
  },
  {
   "name": "marco antonio meléndez meléndez",
   "to": "marcmelendez22@gmail.com",
   "attachment_name": "Constancia_Marco_Antonio_Meléndez_Meléndez.png"
  },
  {
   "name": "ivett flores bautista",
   "to": "ivettflores0406@gmail.com",
   "attachment_name": "Constancia_Ivett_Flores_Bautista.png"
  },
  {
   "name": "marcela montiel castillo",
   "to": "marcecastillo.2002@gmail.com",
   "attachment_name": "Constancia_Marcela_Montiel_Castillo.png"
  },
  {
   "name": "benjamín ricardo palma hernández",
   "to": "CONTRALORIA@COBATLAXCALA.EDU.MX",
   "attachment_name": "Constancia_Benjamín_Ricardo_Palma_Hernández.png"
  },
  {
   "name": "fatima jessica corona rodriguez ",
   "to": "coronafatima769@gmail.com",
   "attachment_name": "Constancia_Fatima_Jessica_Corona_Rodríguez.png"
  },
  {
   "name": "brissel polo barrera",
   "to": "brissel.polo@uptlax.edu.mx",
   "attachment_name": "Constancia_Brissel_Polo_Barrera.png"
  },
  {
   "name": "yessica abril caporal pérez",
   "to": "abrilcapo12@gmail.com",
   "attachment_name": "Constancia_Yessica_Abril_Caporal_Pérez.png"
  },
  {
   "name": "maryant gómez chávez ",
   "to": "maryant.gomez@gmail.com",
   "attachment_name": "Constancia_Maryant_Gómez_Chávez.png"
  },
  {
   "name": "nadia gonzalez tapia",
   "to": "edieedg@gmail.com",
   "attachment_name": "Constancia_Nadia_González_Tapia.png"
  },
  {
   "name": "lucero romero mora",
   "to": "lucero.romero.m@outlook.com",
   "attachment_name": "Constancia_Lucero_Romero_Mora.png"
  }
 ] */

/*  [
  {
   "name": "jhony maldonado trejo",
   "to": "amya_asociados@hotmail.com",
   "attachment_name": "Constancia_Jhony_Maldonado_Trejo.png"
  },
  {
   "name": "johancy aquiahuatl denicia ",
   "to": "johancy_a@hotmail.com",
   "attachment_name": "Constancia_Johancy_Aquiahuatl_Denicia.png"
  },
  {
   "name": "jorge maravilla estrada ",
   "to": "jmeking299@gmail.com",
   "attachment_name": "Constancia_Jorge_Maravilla_Estrada.png"
  },
  {
   "name": "jose antonio medel flores",
   "to": "medelantonio12@yahoo.com.mx",
   "attachment_name": "Constancia_José_Antonio_Medel_Flores.png"
  },
  {
   "name": "josé camacho higareda ",
   "to": "jose.camacho@tlaxcala.conalep.edu.mx",
   "attachment_name": "Constancia_José_Camacho_Higareda.png"
  },
  {
   "name": "jose isabel islas soto",
   "to": "jose_7007@hotmail.com",
   "attachment_name": "Constancia_José_Isabel_Islas_Soto.png"
  },
  {
   "name": "josé jorge hernández romero",
   "to": "jjhdez079@gmail.com",
   "attachment_name": "Constancia_José_Jorge_Hernández_Romero.png"
  },
  {
   "name": "juan carlos cruz jiménez",
   "to": "kharuzzo@gmail.com",
   "attachment_name": "Constancia_Juan_Carlos_Cruz_Jiménez.png"
  },
  {
   "name": "julia paulina loaiza hernández. ",
   "to": "paulina426@hotmail.com",
   "attachment_name": "Constancia_Julia_Paulina_Loaiza_Hernández.png"
  },
  {
   "name": "kenia karen moreno alonso",
   "to": "keniakaren1994@hotmail.com",
   "attachment_name": "Constancia_Kenia_Karen_Moreno_Alonso.png"
  },
  {
   "name": "laura cano xochipa ",
   "to": "laura_cano@cecytlax..edu.mx",
   "attachment_name": "Constancia_Laura_Cano_Xochipa.png"
  },
  {
   "name": "lucila marín barera",
   "to": "lucila_marin@hotmail.com",
   "attachment_name": "Constancia_Lucila_Marín_Barera.png"
  },
  {
   "name": "luis alberto arroyo matamoros ",
   "to": "luis9996.laam@gmail.com",
   "attachment_name": "Constancia_Luis_Alberto_Arroyo_Matamoros.png"
  },
  {
   "name": "lupita flores lópez",
   "to": "lups136@gmail.com",
   "attachment_name": "Constancia_Lupita_Flores_López.png"
  },
  {
   "name": "marcelo ángel tecuapacho cuatianquiz ",
   "to": "tecuapachoangel@gmail.com",
   "attachment_name": "Constancia_Marcelo_Ángel_Tecuapacho_Cuatianquiz.png"
  }
 ] */

 /*  
 [
  {
   "name": "coral luna vázquez ",
   "to": "clunavasquez3@gmail.com",
   "attachment_name": "Constancia_Coral_Luna_Vázquez.png"
  },
  {
   "name": "diana juárez lópez ",
   "to": "dianajuárezlopez6@gmail.com",
   "attachment_name": "Constancia_Diana_Juárez_López.png"
  },
  {
   "name": "diana laura moreno romero ",
   "to": "diana.more28@outlook.com",
   "attachment_name": "Constancia_Diana_Laura_Moreno_Romero.png"
  },
  {
   "name": "doris vera flores",
   "to": "doris.vera@cobatlaxcala.edu.mx",
   "attachment_name": "Constancia_Doris_Vera_Flores.png"
  },
  {
   "name": "eduardo perez chora",
   "to": "contraloria_2021@outlook.com",
   "attachment_name": "Constancia_Eduardo_Pérez_Chora.png"
  },
  {
   "name": "efrain zamora george",
   "to": "efrain.zamora@uptla.edu.mx",
   "attachment_name": "Constancia_Efrain_Zamora_George.png"
  },
  {
   "name": "esmeralda adriana padilla guevara ",
   "to": "esmeadri@outlook.com",
   "attachment_name": "Constancia_Esmeralda_Adriana_Padilla_Guevara.png"
  },
  {
   "name": "fidelia polvo caloch",
   "to": "fpcaloch@hotmail.com",
   "attachment_name": "Constancia_Fidelia_Polvo_Caloch.png"
  },
  {
   "name": "gisela zacamolpa zarate ",
   "to": "gixe_sing@outlook.com",
   "attachment_name": "Constancia_Gisela_Zacamolpa_Zarate.png"
  },
  {
   "name": "héctor manuel fernández tapia",
   "to": "hector_manuelf@hotmail.com",
   "attachment_name": "Constancia_Héctor_Manuel_Fernández_Tapia.png"
  },
  {
   "name": "janis leticia jiménez lópez",
   "to": "kendrajanis_jimlo@hotmail.com",
   "attachment_name": "Constancia_Janis_Leticia_Jiménez_López.png"
  },
  {
   "name": "jesus velázquez bautista ",
   "to": "bautista.jesus.1917@gmail.com",
   "attachment_name": "Constancia_Jesús_Velázquez_Bautista.png"
  },
  {
   "name": "jhoana gutiérrez herrera",
   "to": "jhoanagutierrezherrera10@gmail.com",
   "attachment_name": "Constancia_Jhoana_Gutiérrez_Herrera.png"
  }
 ]
 */

/*  [
  {
   "name": "armando mendieta cahuantzi ",
   "to": "armando1mendieta@hotmail.com",
   "attachment_name": "Constancia_Armando_Mendieta_Cahuantzi.png"
  },
  {
   "name": "atenas hernández sánchez ",
   "to": "atenas.hdez@gmail.com",
   "attachment_name": "Constancia_Atenas_Hernández_Sánchez.png"
  },
  {
   "name": "azalea ordoñez garcía",
   "to": "azaleagarcia448@gmail.com",
   "attachment_name": "Constancia_Azalea_Ordoñez_García.png"
  },
  {
   "name": "berenice lima lima ",
   "to": "berenicelimalima3@gmail.com",
   "attachment_name": "Constancia_Berenice_Lima_Lima.png"
  },
  {
   "name": "brenda nava solis",
   "to": "brenda.ns@hotmail.com",
   "attachment_name": "Constancia_Brenda_Nava_Solis.png"
  },
  {
   "name": "carlos hernández lópez ",
   "to": "lawyerfiscalista@gmail.com",
   "attachment_name": "Constancia_Carlos_Hernández_López.png"
  },
  {
   "name": "cecilia gudelia hernandez márquez ",
   "to": "marley_cosmos@hotmail.com",
   "attachment_name": "Constancia_Cecilia_Gudelia_Hernandez_Márquez.png"
  },
  {
   "name": "cirilo rosalio espejel velazco ",
   "to": "crosalioev@gmail.com",
   "attachment_name": "Constancia_Cirilo_Rosalio_Espejel_Velazco.png"
  },
  {
   "name": "claudia lo ruhama zamora tapia",
   "to": "lorruszt@yahoo.com",
   "attachment_name": "Constancia_Claudia_Lo_Ruhama_Zamora_Tapia.png"
  },
  {
    "name": "konrad calva bonilla ",
    "to": "konrad.calva@outlook.com",
    "attachment_name": "Constancia_Konrad_Calva_Bonilla.png"
   },
   {
    "name": "juliana rodríguez pérez ",
    "to": "marifer2017sep@gmail.com",
    "attachment_name": "Constancia_Juliana_Rodríguez_Pérez.png"
   },
   {
    "name": "josé jorge hernández romero",
    "to": "jjhdez079@gmail.com",
    "attachment_name": "Constancia_José_Jorge_Hernández_Romero.png"
   }
 ] */

/* [
 {
  "name": "armando mendieta cahuantzi ",
  "to": "armando1mendieta@hotmail.com",
  "attachment_name": "Constancia_Armando_Mendieta_Cahuantzi.png"
 },
 {
  "name": "atenas hernández sánchez ",
  "to": "atenas.hdez@gmail.com",
  "attachment_name": "Constancia_Atenas_Hernández_Sánchez.png"
 },
 {
  "name": "azalea ordoñez garcía",
  "to": "azaleagarcia448@gmail.com",
  "attachment_name": "Consta

 {
  "name": "berenice lima lima ",
  "to": "berenicelimalima3@gmail.com",
  "attachment_name": "Constancia_Berenice_Lima_Lima.png"
 },
 {
  "name": "brenda nava solis",
  "to": "brenda.ns@hotmail.com",
  "attachment_name": "Constancia_Brenda_Nava_Solis.png"
 },
 {
  "name": "carlos hernández lópez ",
  "to": "lawyerfiscalista@gmail.com",
  "attachment_name": "Constancia_Carlos_Hernández_López.png"
 },
 {
  "name": "cecilia gudelia hernandez márquez ",
  "to": "marley_cosmos@hotmail.com",
  "attachment_name": "Constancia_Cecilia_Gudelia_Hernandez_Márquez.png"
 },
 {
  "name": "cirilo rosalio espejel velazco ",
  "to": "crosalioev@gmail.com",
  "attachment_name": "Constancia_Cirilo_Rosalio_Espejel_Velazco.png"
 },
 {
  "name": "claudia lo ruhama zamora tapia",
  "to": "lorruszt@yahoo.com",
  "attachment_name": "Constancia_Claudia_Lo_Ruhama_Zamora_Tapia.png"
 },
 {
  "name": "coral luna vázquez ",
  "to": "clunavasquez3@gmail.com",
  "attachment_name": "Constancia_Coral_Luna_Vázquez.png"
 },
 {
  "name": "diana juárez lópez ",
  "to": "dianajuárezlopez6@gmail.com",
  "attachment_name": "Constancia_Diana_Juárez_López.png"
 },
 {
  "name": "diana laura moreno romero ",
  "to": "diana.more28@outlook.com",
  "attachment_name": "Constancia_Diana_Laura_Moreno_Romero.png"
 },
 {
  "name": "doris vera flores",
  "to": "doris.vera@cobatlaxcala.edu.mx",
  "attachment_name": "Constancia_Doris_Vera_Flores.png"
 },
 {
  "name": "eduardo perez chora",
  "to": "contraloria_2021@outlook.com",
  "attachment_name": "Constancia_Eduardo_Pérez_Chora.png"
 },
 {
  "name": "efrain zamora george",
  "to": "efrain.zamora@uptla.edu.mx",
  "attachment_name": "Constancia_Efrain_Zamora_George.png"
 },
 {
  "name": "esmeralda adriana padilla guevara ",
  "to": "esmeadri@outlook.com",
  "attachment_name": "Constancia_Esmeralda_Adriana_Padilla_Guevara.png"
 },
 {
  "name": "fidelia polvo caloch",
  "to": "fpcaloch@hotmail.com",
  "attachment_name": "Constancia_Fidelia_Polvo_Caloch.png"
 },
 {
  "name": "gisela zacamolpa zarate ",
  "to": "gixe_sing@outlook.com",
  "attachment_name": "Constancia_Gisela_Zacamolpa_Zarate.png"
 },
 {
  "name": "héctor manuel fernández tapia",
  "to": "hector_manuelf@hotmail.com",
  "attachment_name": "Constancia_Héctor_Manuel_Fernández_Tapia.png"
 },
 {
  "name": "janis leticia jiménez lópez",
  "to": "kendrajanis_jimlo@hotmail.com",
  "attachment_name": "Constancia_Janis_Leticia_Jiménez_López.png"
 },
 {
  "name": "jesus velázquez bautista ",
  "to": "bautista.jesus.1917@gmail.com",
  "attachment_name": "Constancia_Jesús_Velázquez_Bautista.png"
 },
 {
  "name": "jhoana gutiérrez herrera",
  "to": "jhoanagutierrezherrera10@gmail.com",
  "attachment_name": "Constancia_Jhoana_Gutiérrez_Herrera.png"
 },
 {
  "name": "jhony maldonado trejo",
  "to": "amya_asociados@hotmail.com",
  "attachment_name": "Constancia_Jhony_Maldonado_Trejo.png"
 },
 {
  "name": "johancy aquiahuatl denicia ",
  "to": "johancy_a@hotmail.com",
  "attachment_name": "Constancia_Johancy_Aquiahuatl_Denicia.png"
 },
 {
  "name": "jorge maravilla estrada ",
  "to": "jmeking299@gmail.com",
  "attachment_name": "Constancia_Jorge_Maravilla_Estrada.png"
 },
 {
  "name": "jose antonio medel flores",
  "to": "medelantonio12@yahoo.com.mx",
  "attachment_name": "Constancia_José_Antonio_Medel_Flores.png"
 },
 {
  "name": "josé camacho higareda ",
  "to": "jose.camacho@tlaxcala.conalep.edu.mx",
  "attachment_name": "Constancia_José_Camacho_Higareda.png"
 },
 {
  "name": "jose isabel islas soto",
  "to": "jose_7007@hotmail.com",
  "attachment_name": "Constancia_José_Isabel_Islas_Soto.png"
 },
 {
  "name": "josé jorge hernández romero",
  "to": "jjhdez079@gmail.com",
  "attachment_name": "Constancia_José_Jorge_Hernández_Romero.png"
 },
 {
  "name": "juan carlos cruz jiménez",
  "to": "kharuzzo@gmail.com",
  "attachment_name": "Constancia_Juan_Carlos_Cruz_Jiménez.png"
 },
 {
  "name": "juan luis reyes serrato",
  "to": "juanlrese@hotmail.com",
  "attachment_name": "Constancia_Juan_Luis_Reyes_Serrato.png"
 },
 {
  "name": "julia paulina loaiza hernández. ",
  "to": "paulina426@hotmail.com",
  "attachment_name": "Constancia_Julia_Paulina_Loaiza_Hernández.png"
 },
 {
  "name": "juliana rodríguez pérez ",
  "to": "marifer2017sep@gmail.com",
  "attachment_name": "Constancia_Juliana_Rodríguez_Pérez.png"
 },
 {
  "name": "kenia karen moreno alonso",
  "to": "keniakaren1994@hotmail.com",
  "attachment_name": "Constancia_Kenia_Karen_Moreno_Alonso.png"
 },
 {
  "name": "konrad calva bonilla ",
  "to": "konrad.calva@outlook.com",
  "attachment_name": "Constancia_Konrad_Calva_Bonilla.png"
 },
 {
  "name": "laura cano xochipa ",
  "to": "laura_cano@cecytlax..edu.mx",
  "attachment_name": "Constancia_Laura_Cano_Xochipa.png"
 },
 {
  "name": "lucila marín barera",
  "to": "lucila_marin@hotmail.com",
  "attachment_name": "Constancia_Lucila_Marín_Barera.png"
 },
 {
  "name": "luis alberto arroyo matamoros ",
  "to": "luis9996.laam@gmail.com",
  "attachment_name": "Constancia_Luis_Alberto_Arroyo_Matamoros.png"
 },
 {
  "name": "lupita flores lópez",
  "to": "lups136@gmail.com",
  "attachment_name": "Constancia_Lupita_Flores_López.png"
 },
 {
  "name": "marcelo ángel tecuapacho cuatianquiz ",
  "to": "tecuapachoangel@gmail.com",
  "attachment_name": "Constancia_Marcelo_Ángel_Tecuapacho_Cuatianquiz.png"
 },
 {
  "name": "maría marlén cuapio gonzález ",
  "to": "marla_2805@hotmail.com",
  "attachment_name": "Constancia_María_Marlén_Cuapio_González.png"
 },
 {
  "name": "maría miriam cabrera lópez ",
  "to": "derechoyjusticia216@gmail.com",
  "attachment_name": "Constancia_María_Miriam_Cabrera_López.png"
 },
 {
  "name": "mariano hernandez garcía ",
  "to": "marHerGar67@gmail.com",
  "attachment_name": "Constancia_Mariano_Hernández_García.png"
 },
 {
  "name": "mónica sánchez lumbreras",
  "to": "monica.snlumbreras@gmail.com",
  "attachment_name": "Constancia_Mónica_Sánchez_Lumbreras.png"
 },
 {
  "name": "nayeli mishel muñoz hernández",
  "to": "nayeli.munoz@cecytlax.edu.mx",
  "attachment_name": "Constancia_Nayeli_Mishel_Mmuñoz_Hernández.png"
 },
 {
  "name": "nelcy romero tecpa",
  "to": "contraloriatexoloc.2124@gmail.com\nromero.ico.2015@gmail.com\n",
  "attachment_name": "Constancia_Nelcy_Romero_Tecpa.png"
 },
 {
  "name": "orlando santacruz carreño",
  "to": "orlandosc@hotmail.com",
  "attachment_name": "Constancia_Orlando_Santacruz_Carreño.png"
 },
 {
  "name": "orquídea jiménez nájera",
  "to": "orquidea.jiménez@cecytlax.edu.mx",
  "attachment_name": "Constancia_Orquídea_Jiménez_Nájera.png"
 },
 {
  "name": "patricia gonzález carrasco ",
  "to": "seguimientobj@gmail.com\npgc363@gmail.com\n",
  "attachment_name": "Constancia_Patricia_González_Carrasco.png"
 },
 {
  "name": "porfirio hernández sastré",
  "to": "phernandez414@outlook.com",
  "attachment_name": "Constancia_Porfirio_Hernández_Sastré.png"
 },
 {
  "name": "reyna marisol sánchez velázquez",
  "to": "r.sanchezu@cedhtlax.org.mx",
  "attachment_name": "Constancia_Reyna_Marisol_Sánchez_Velázquez.png"
 },
 {
  "name": "rosa ivonne mendoza martínez ",
  "to": "rivon.95@gmail.com",
  "attachment_name": "Constancia_Rosa_Ivonne_Mendoza_Martínez.png"
 },
 {
  "name": "rosita adriana flores lira",
  "to": "adrianafl_14@hotmail.com",
  "attachment_name": "Constancia_Rosita_Adriana_Flores_Lira.png"
 },
 {
  "name": "sandra hernández torres",
  "to": "sandrahtopd@gmail.com",
  "attachment_name": "Constancia_Sandra_Hernández_Torres.png"
 },
 {
  "name": "santiago pérez petricioli",
  "to": "pepsan474@hotmail.com",
  "attachment_name": "Constancia_Santiago_Pérez_Petricioli.png"
 },
 {
  "name": "teodora popocatl nava",
  "to": "doris.popocatl@gmail.com",
  "attachment_name": "Constancia_Teodora_Popocatl_Nava.png"
 },
 {
  "name": "ulises garcia arista",
  "to": "uligarista@gmail.com",
  "attachment_name": "Constancia_Ulises_García_Arista.png"
 },
 {
  "name": "vicente vásquez cervantes",
  "to": "vicentevas373@gmail.com",
  "attachment_name": "Constancia_Vicente_Vásquez_Cervantes.png"
 },
 {
  "name": "victoria flores pérez",
  "to": "contraloria.nanacamilpa2024@gmail.com",
  "attachment_name": "Constancia_Victoria_Flores_Pérez.png"
 },
 {
  "name": "yazmin sánchez",
  "to": "yfdezlara@gmail.com ",
  "attachment_name": "Constancia_Yazmin_Sánchez_Fernández_de_Lara.png"
 },
 {
  "name": "tomás mire aguayo",
  "to": "cp_mire@hotmail.com",
  "attachment_name": "Constancia_Tomás_Mire_Aguayo.png"
 },
 {
  "name": "azucena vázquez hernández",
  "to": "susivazher1989@gmail.com",
  "attachment_name": "Constancia_Azucena_Vázquez_Hernández.png"
 },
 {
  "name": "an-ki vasquez herrera",
  "to": "an-ki_vasquezh@hotmail.com",
  "attachment_name": "Constancia_An-ki_Vásquez_Herrera.png"
 },
 {
  "name": "marco antonio meléndez meléndez",
  "to": "marcmelendez22@gmail.com",
  "attachment_name": "Constancia_Marco_Antonio_Meléndez_Meléndez.png"
 },
 {
  "name": "ivett flores bautista",
  "to": "ivettflores0406@gmail.com",
  "attachment_name": "Constancia_Ivett_Flores_Bautista.png"
 },
 {
  "name": "marcela montiel castillo",
  "to": "marcecastillo.2002@gmail.com",
  "attachment_name": "Constancia_Marcela_Montiel_Castillo.png"
 },
 {
  "name": "benjamín ricardo palma hernández",
  "to": "CONTRALORIA@COBATLAXCALA.EDU.MX",
  "attachment_name": "Constancia_Benjamín_Ricardo_Palma_Hernández.png"
 },
 {
  "name": "fatima jessica corona rodriguez ",
  "to": "coronafatima769@gmail.com",
  "attachment_name": "Constancia_Fatima_Jessica_Corona_Rodríguez.png"
 },
 {
  "name": "brissel polo barrera",
  "to": "brissel.polo@uptlax.edu.mx",
  "attachment_name": "Constancia_Brissel_Polo_Barrera.png"
 },
 {
  "name": "yessica abril caporal pérez",
  "to": "abrilcapo12@gmail.com",
  "attachment_name": "Constancia_Yessica_Abril_Caporal_Pérez.png"
 },
 {
  "name": "maryant gómez chávez ",
  "to": "maryant.gomez@gmail.com",
  "attachment_name": "Constancia_Maryant_Gómez_Chávez.png"
 },
 {
  "name": "nadia gonzalez tapia",
  "to": "edieedg@gmail.com",
  "attachment_name": "Constancia_Nadia_González_Tapia.png"
 },
 {
  "name": "lucero romero mora",
  "to": "lucero.romero.m@outlook.com",
  "attachment_name": "Constancia_Lucero_Romero_Mora.png"
 },
 {
  "name": "elizabeth olivares guevara",
  "to": "lups136@gmail.com",
  "attachment_name": "Constancia_Elizabeth_Olivares_Guevara.png"
 },
 {
  "name": "anahi george morales",
  "to": "hermosa_gema17@hotmail.com",
  "attachment_name": "Constancia_Anahi_George_Morales.png"
 },
 {
  "name": "andres ixtlapale meneses ",
  "to": "c.pixtlapale@gmail.com",
  "attachment_name": "Constancia_Andrés_Ixtlapale_Meneses.png"
 },
 {
  "name": "isaias muñoz muñoz",
  "to": "cpisaias@hotmail.com",{
  "name": "josé jorge hernández romero",
  "to": "jjhdez079@gmail.com",
  "attachment_name": "Constancia_José_Jorge_Hernández_Romero.png"
 },
  "attachment_name": "Constancia_Isaias_Muñoz_Muñoz.png"
 },
 {
  "name": "jehovanni hernandez vazquez",
  "to": "jehohv@gmail.com",
  "attachment_name": "Constancia_Jehovanni_Hernández_Vázquez.png"
 },
 {
  "name": "jose luis mena mena",
  "to": "jslsmnmn@gmail.com",
  "attachment_name": "Constancia_José_Luis_Mena_Mena.png"
 },
 {
  "name": "juan mellado silva",
  "to": "consultoriajurídicalop@gmail.com",
  "attachment_name": "Constancia_Juan_Mellado_Silva.png"
 },
 {
  "name": "nohemi barragan hernandez",
  "to": "contraloriainterna.sfp@tlaxcala.gob.mx",
  "attachment_name": "Constancia_NohemÍ_Barragán_Hernández.png"
 },
 {
  "name": "eliseo ramos padilla",
  "to": "eliseoramospadilla@hotmail.com",
  "attachment_name": "Constancia_Eliseo_Ramos_Padilla.png"
 },
 {
  "name": "jetfrith vázquez galvez",
  "to": "ing_jet_vg@hotmail.com",
  "attachment_name": "Constancia_Jetfrith_Vázquez_Gálvez.png"
 },
 {
  "name": "teresita lopez gonzalez",
  "to": "terelg@gmail.com",
  "attachment_name": "Constancia_Teresita_López_González.png"
 },
 {
  "name": "yeni rodriguez gutierrez",
  "to": "cpjenny_1@hotmail.com",
  "attachment_name": "Constancia_Yeni_Rodríguez_Gutiérrez.png"
 },
 {
  "name": "rebeca xicohténcatl corona",
  "to": "rbk_19@outlook.es",
  "attachment_name": "Constancia_Rebeca_Xicohténcatl_Corona.png"
 }
]



 */

/* [
    {
     "name": "ana karen flores villegas",
     "to": "carmenfv416@gmail.com",
     "attachment_name": "Constancia_Ana_Karen_Flores_Villegas.png"
    },
    {
     "name": "anayeli valencia teomitzi ",
     "to": "anayeli.valent@gmail.com",
     "attachment_name": "Constancia_Anayeli_Valencia_Teomitzi.png"
    },
    {
     "name": "andrea romano saldaña.",
     "to": "romanoandrea478@gmail.com",
     "attachment_name": "Constancia_Andrea_Romano_Saldaña.png"
    },
    {
     "name": "ángel espinoza ponce",
     "to": "angespipo@gmail.com",
     "attachment_name": "Constancia_Ángel_Espinoza_Ponce.png"
    },
    {
     "name": "ángel tecocoatzi jiménez",
     "to": "angeltecocoatzij@outlook.com",
     "attachment_name": "Constancia_Ángel_Tecocoatzi_Jiménez.png"
    },
    {
     "name": "armando garcía lópez",
     "to": "armando_garcilop@hotmail.com",
     "attachment_name": "Constancia_Armando_García_López.png"
    },
    {
     "name": "armando mendieta cahuantzi ",
     "to": "armando1mendieta@hotmail.com",
     "attachment_name": "Constancia_Armando_Mendieta_Cahuantzi.png"
    }
   ] */

/* 
[
    {
     "name": "alfredo valencia robles",
     "to": "alfredo_valencia30@hotmail.com",
     "attachment_name": "Constancia_Alfredo_Valencia_Robles.png"
    },
    {
     "name": "agustín sánchez rodríguez ",
     "to": "lic.agustin.sanchez.r@outlook.es",
     "attachment_name": "Constancia_Agustín_Sánchez_Rodríguez.png"
    },
    {
     "name": "aldo mauricio téllez pérez ",
     "to": "aley_tellez18_1982@hotmail.com",
     "attachment_name": "Constancia_Aldo_Mauricio_Téllez_Pérez.png"
    },
    {
     "name": "alejandra micheel pérez pérez ",
     "to": "alemicheel101702@gmail.com",
     "attachment_name": "Constancia_Alejandra_Micheel_Pérez_Pérez.png"
    },
    {
     "name": "alejandro alonso herrera lumbreras",
     "to": "ale_cmdif@hotmail.com",
     "attachment_name": "Constancia_Alejandro_Alonso_Herrera_Lumbreras.png"
    },
    {
     "name": "álvaro ramirez luna ",
     "to": "alvaro1974@gmail.com ",
     "attachment_name": "Constancia_Álvaro_Ramírez_Luna.png"
    }
   ]
 */

/* [
    {
        name: 'alfredo valencia robles',
        to:'rtcface@gmail.com',
        attachment_name:'Constancia_Alfredo_Valencia_Robles.png',
    },
    {
        name: 'maria del rosario',
        to:'rtcface@gmail.com',
        attachment_name:'Constancia_Marco_Antonio_Meléndez_Meléndez.png',

    },
    {
        name: 'juan pablo',
        to:'rtcface@gmail.com',
        attachment_name:'Constancia_Yazmin_Sánchez_Fernández_de_Lara.png',

    }
] */

