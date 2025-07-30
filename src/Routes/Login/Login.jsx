import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            let result;
            result = await response.json();

            if (result.token) {
                Swal.fire({
                    icon: 'success',
                    title: 'Inicio de sesión exitoso',
                    text: result.message
                });
                setFormData({
                    username: '',
                    password: ''
                });
                navigate('/dashboard');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: `Error al intentar iniciar sesión: ${result.error}`
                });
            }
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: `Error iniciando sesión: ${error.message}`
            });
        } finally {
            setIsSending(false);
        }
    }

    return (
        <section>
            <form id="form" data-aos="zoom-in-up" data-aos-duration="1000" onSubmit={handleSubmit}>
                <h4 className="contactTitle">Inicio de sesión</h4>

                <input type="text" placeholder="Nombre de usuario" name="username" id="username" value={formData.username} onChange={handleChange} required />
                <input type="password" placeholder="Contraseña" name="password" id="password" value={formData.password} onChange={handleChange} required />

                <input type="submit" id="button" value={isSending ? 'Iniciando...' : 'Iniciar sesión'} className="button" disabled={isSending} />
            </form>


        </section>
    )
}

export default Login