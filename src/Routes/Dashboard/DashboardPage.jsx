import { useEffect, useState } from "react"
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import Dashboard from "../../Components/Dashboard/Dashboard";

const DashboardPage = () => {
    const navigate = useNavigate()
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('/api/auth/auth', {
                    method: 'GET',
                    credentials: 'include',
                });
                const data = await res.json();
                if (res.status === 401) {
                    Swal.fire({
                        icon: 'error',
                        title: 'No autorizado',
                        text: 'Por favor, inicia sesión para acceder al dashboard.',
                        confirmButtonText: 'Iniciar sesión',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/login');
                        }
                    });
                } else if (res.status !== 200) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: data.error || 'Ocurrió un error',
                    });
                } else {
                    setIsAdmin(true)
                }
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: err.message || 'Ocurrió un error',
                });
                console.log(err);
            }
        }
        fetchData();
    }, [])

    return (
        <div className="dashboard">
            <h1 className="bold ps-4">Dashboard</h1>
            {isAdmin ? (
                <Dashboard />
            ) : (
                <p>No tienes permisos para acceder a esta sección.</p>
            )}
        </div> 
    )
}

export default DashboardPage