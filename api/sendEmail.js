import nodemailer from 'nodemailer';
import process from 'node:process';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  console.log(req.body);

  const { name, last, mail, msg } = req.body;

  if (!name || !last || !mail || !msg) {
    return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios.' });
  }

  if (!name.match(/^[A-Za-zÑñÁáÉéÍíÓóÚú]+(?:\s+[A-Za-zÑñÁáÉéÍíÓóÚú]+)*$/gm)) {
    return res.status(400).json({ success: false, message: 'El nombre tiene un formato inválido.' });
  }
  if (!last.match(/^[A-Za-zÑñÁáÉéÍíÓóÚú]+(?:\s+[A-Za-zÑñÁáÉéÍíÓóÚú]+)*$/gm)) {
    return res.status(400).json({ success: false, message: 'El apellido tiene un formato inválido.' });
  }

  if (!mail.match(/^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/)) {
    return res.status(400).json({ success: false, message: 'El correo tiene un formato inválido.' });
  }

  if (!msg.match(/^[A-Za-zÑñÁáÉéÍíÓóÚú]+(?:\s+[A-Za-zÑñÁáÉéÍíÓóÚú]+)*$/gm)) {
    return res.status(400).json({ success: false, message: 'El mensaje tiene un formato inválido.' });
  }

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  let mailOptions = {
    from: mail,
    to: process.env.RECEIVER_EMAIL,
    subject: `Mensaje de ${name} ${last}`,
    text: msg,
  };

  try {
    await transporter.jsonMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Correo enviado exitosamente' });
  } catch (error) {
    return res.status(500).json({ success: false, message: `Error enviando el correo: ${error.message}` });
  }
}
