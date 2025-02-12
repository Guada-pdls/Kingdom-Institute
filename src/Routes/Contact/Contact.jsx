import { useState } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    last: "",
    mail: "",
    msg: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let result;
      result = await response.json();

      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Mensaje enviado correctamente",
          text: result.message,
        });
        setFormData({
          name: "",
          last: "",
          mail: "",
          msg: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: result.message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Error enviando el correo: ${error.message}`,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contacto - Kingdom Institute</title>
        <meta
          name="description"
          content="Formulario de contacto del instituto."
        />
        <meta
          name="keywords"
          content="cursos de ingles, inglés, inglés para niños, clases de inglés, inglés personalizado, examenes de inglés, preparacion de examenes"
        />
        <meta property="og:title" content="Contacto - Kingdom Institute" />
        <meta
          property="og:description"
          content="Ponte en contacto con Kingdom Institute para conocer más sobre nuestros cursos."
        />
        <meta property="og:image" content="/images/contact-image.jpg" />
      </Helmet>
      <section>
        <form
          id="form"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          onSubmit={handleSubmit}
        >
          <h4 className="contactTitle">Formulario de contacto</h4>

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
            value={isSending ? "Enviando..." : "Enviar"}
            className="button"
            disabled={isSending}
          />
        </form>
      </section>
    </>
  );
};

export default Contact;
