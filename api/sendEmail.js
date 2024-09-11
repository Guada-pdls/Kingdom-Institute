import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests are allowed' });
  }

  const { name, last, mail, msg } = req.body;

  if (!name || !last || !mail || !msg) {
    return res.status(400).send({ success: false, message: 'Todos los campos son obligatorios.' });
  }

  const nameLastRegex = /^[A-Za-zÑñÁáÉéÍíÓóÚú]+(?:\s+[A-Za-zÑñÁáÉéÍíÓóÚú]+)*$/gm;
  if (!nameLastRegex.test(name)) {
    return res.status(400).send({ success: false, message: 'El nombre tiene un formato inválido.' });
  }
  if (!nameLastRegex.test(last)) {
    return res.status(400).send({ success: false, message: 'El apellido tiene un formato inválido.' });
  }

  const mailRegex = /^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()\\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  if (!mailRegex.test(mail)) {
    return res.status(400).send({ success: false, message: 'El correo tiene un formato inválido.' });
  }

  if (!nameLastRegex.test(msg)) {
    return res.status(400).send({ success: false, message: 'El mensaje tiene un formato inválido.' });
  }

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: import.meta.env.GMAIL_USER,
      pass: import.meta.env.GMAIL_PASS,
    },
  });

  let mailOptions = {
    from: mail,
    to: import.meta.env.VITE_RECEIVER_EMAIL,
    subject: `Mensaje de ${name} ${last}`,
    text: msg,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).send({ success: true, message: 'Correo enviado exitosamente' });
  } catch (error) {
    return res.status(500).send({ success: false, message: `Error enviando el correo: ${error.message}` });
  }
}
