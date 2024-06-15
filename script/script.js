// formulario

const nam = document.getElementById('nam');
const last = document.getElementById('last');
const mail = document.getElementById('mail');
const msg = document.getElementById('msg');
const resultado = document.querySelector('.resultado')
const btn = document.getElementById('button');
const form = document.getElementById('form')

const validar = () => {
    let error = {};
    if (nam.value.length < 4) {
        error.exist = true;
        error.msg = "El nombre no puede contener menos de 4 caracteres"
        return error;
    } else if (nam.value.length > 40) {
        error.exist = true;
        error.msg = "El nombre no puede contener mas de 40 caracteres"
        return error
    } else if (last.value.length < 3) {
        error.exist = true;
        error.msg = "El apellido no puede contener menos de 3 caracteres"
        return error
    } else if (last.value.length > 40) {
        error.exist = true;
        error.msg = "El apellido no puede contener mas de 40 caracteres"
        return error
    } else if (mail.value.length < 5 || mail.value.length > 40 || mail.value.indexOf("@") == -1 || mail.value.indexOf(".") == -1) {
        error.exist = true;
        error.msg = "El correo es inválido"
        return error;
    } else if (msg.value.length < 4) {
        error.exist = true;
        error.msg = "El mensaje no puede contener menos de 4 caracteres"
        return error;
    } else if (nam.value.indexOf("<") != -1 || nam.value.indexOf(">") != -1 || last.value.indexOf("<") != -1 || last.value.indexOf(">") != -1 || mail.value.indexOf("<") != -1 || mail.value.indexOf(">") != -1 || msg.value.indexOf("<") != -1 || msg.value.indexOf(">") != -1) {
        error.exist = true;
        error.msg = "Ningún campo puede contener '<' o '>'"
        return error;
    }
    error.exist = false;
    return error;
};

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    let error = validar();
    if (error.exist) {
        resultado.innerHTML = error.msg
        resultado.classList.add('red')
    } else {
        resultado.classList.remove('red');
        resultado.innerHTML = ""
        btn.value = 'Enviando...';

        try {
            const response = await fetch("http://localhost:8000/api/email", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: nam.value + " " + last.value, mail: mail.value, msg: msg.value })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log('Email sent successfully');
        } catch (error) {
            console.error('Fetch error:', error.message);
            resultado.innerHTML = `Error sending email: ${error.message}`;
            resultado.classList.add('red');
        } finally {
            btn.value = 'Submit';
        }
    };
});