import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    last: '',
    mail: '',
    msg: ''
  });

  const [error, setError] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let error = {};
    const { name, last, mail, msg } = formData;

    if (name.length < 4) {
      error.msg = 'El nombre no puede contener menos de 4 caracteres';
      return error;
    } else if (name.length > 40) {
      error.msg = 'El nombre no puede contener más de 40 caracteres';
      return error;
    } else if (last.length < 3) {
      error.msg = 'El apellido no puede contener menos de 3 caracteres';
      return error;
    } else if (last.length > 40) {
      error.msg = 'El apellido no puede contener más de 40 caracteres';
      return error;
    } else if (mail.length < 5 || mail.length > 40 || mail.indexOf('@') === -1 || mail.indexOf('.') === -1) {
      error.msg = 'El correo es inválido';
      return error;
    } else if (msg.length < 4) {
      error.msg = 'El mensaje no puede contener menos de 4 caracteres';
      return error;
    } else if ([name, last, mail, msg].some(field => field.includes('<') || field.includes('>'))) {
      error.msg = 'Ningún campo puede contener "<" o ">"';
      return error;
    }

    error.exist = false;
    return error;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validate();
    if (error.msg) {
      setError(error.msg);
      setSuccessMessage(''); 
    } else {
      setError('');
      setIsSending(true); 
      setSuccessMessage('');

      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/email`, { // TODO: Cambiar URL por la del backend
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name + ' ' + formData.last,
            mail: formData.mail,
            msg: formData.msg
          }),
        });

        if (!response.ok) {
          throw new Error(`Error al enviar el correo: ${response.status}`);
        }

        setSuccessMessage('Correo enviado exitosamente');
        setFormData({
          name: '',
          last: '',
          mail: '',
          msg: ''
        });
      } catch (error) {
        setError(`Error enviando el correo: ${error.message}`);
      } finally {
        setIsSending(false);  // Reset send button
      }
    }
  };

  return (
    <section>
      <form id="form" data-aos="zoom-in-up" data-aos-duration="1000" onSubmit={handleSubmit}>
        <h4>Formulario de contacto</h4>
        
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          id="nam"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Apellido"
          name="last"
          id="last"
          value={formData.last}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          name="mail"
          id="mail"
          value={formData.mail}
          onChange={handleChange}
          required
        />
        <textarea
          cols="30"
          rows="5"
          placeholder="Asunto"
          name="msg"
          id="msg"
          value={formData.msg}
          onChange={handleChange}
          required
        ></textarea>

        <input
          type="submit"
          id="button"
          value={isSending ? 'Enviando...' : 'Enviar'}
          className="button"
          disabled={isSending} 
        />
        {error && <div className="resultado red">{error}</div>}
        {successMessage && <div className="resultado green">{successMessage}</div>}
      </form>
    </section>
  );
};

export default Contact;
