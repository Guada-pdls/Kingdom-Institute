// formulario

const nam = document.getElementById('nam');
const last = document.getElementById('last');
const mail = document.getElementById('mail');
const msg = document.getElementById('msg');
const resultado = document.querySelector('.resultado')
const btn = document.getElementById('button');

const validar = ()=>{
    let error = [];
    if (nam.value.length < 4){
        error[0] = true;
        error[1] = "El nombre no puede contener menos de 4 caracteres"
        return error;
    } else if (nam.value.length > 40 || last.value.length > 40){
        error[0] = true;
        error[1] = "El nombre no puede contener mas de 40 caracteres"
        return error
    } else if (last.value.length < 3){
        error[0] = true;
        error[1] = "El apellido no puede contener menos de 3 caracteres"
        return error
    } else if (last.value.length > 40){
        error[0] = true;
        error[1] = "El apellido no puede contener mas de 40 caracteres"
        return error
    } else if (mail.value.length < 5 || mail.value.length > 40 || mail.value.indexOf("@") == -1 || mail.value.indexOf(".") == -1){
        error[0] = true;
        error[1] = "El correo es inválido"
        return error;
    } else if (msg.value.length < 4){
        error[0] = true;
        error[1] = "El mensaje no puede contener menos de 4 caracteres"
        return error;
    } else if (nam.value.indexOf("<") != -1 || nam.value.indexOf(">") != -1 || last.value.indexOf("<") != -1 || last.value.indexOf(">") != -1 || mail.value.indexOf("<") != -1 || mail.value.indexOf(">") != -1 || msg.value.indexOf("<") != -1 || msg.value.indexOf(">") != -1){
        error[0] = true;
        error[1] = "Ningún campo puede contener '<' o '>'"
        return error;
    }
    error[0] = false;
    return error;
};

document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   let error = validar();
   if (error[0]){
       resultado.innerHTML = error[1]
       resultado.classList.add('red')
   } else {
        resultado.classList.remove('red');
        resultado.innerHTML = ""
        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_rrq7at7';

        emailjs.sendForm(serviceID, templateID, this)
         .then(() => {
           btn.value = 'Enviar';
           alert('Mensaje enviado correctamente');
         }, (err) => {
           btn.value = 'Enviar';
           alert(JSON.stringify(err));
         });
        };
});