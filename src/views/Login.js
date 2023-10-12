import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import '../styles/LoginCart.css'


function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setIsAuthenticated, setCliente } = props;
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }
    
    const handleSubmit =  (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            })
            .then((response) => {
                if (response.status >= 400 && response.status < 600) {
                    return response.json().then((data) => {
                        throw new Error(data.error || 'Error de autenticación');
                    });
                }
                return response.json();
            })
            .then((data) => {
                setIsAuthenticated(true);
                setCliente(data);
                navigate("/");
            })
            .catch((error) => {
                console.error('Error en la solicitud:', error.message);
                    // Si el error contiene un mensaje personalizado, puedes mostrarlo al usuario
                    if (error.message) {
                        alert(error.message); // O utiliza una librería de notificaciones
                    } else {
                        // Manejar otros errores aquí
                    }
            });
            
    }
        
    return(
        <div className="back-image">
            <div className="login">
                <form onSubmit={handleSubmit}>
                    <h2>Iniciar Sesión</h2>
                    <div>
                        <label>Email</label>
                        <input className="input"
                        type="email"
                        name="email"
                        value={email.toString()}
                        onChange={handleInputChange}
                        placeholder="ejemplo@correo.com"
                        autoComplete="current-email"
                        />
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input className="input"
                        type="password"
                        name="password"
                        value={password.toString()}
                        onChange={handleInputChange}
                        placeholder="******"
                        autoComplete="current-password"/>
                    </div>
                    <Button className="btn-login" type="submit">Iniciar Sesión</Button>
                </form>
            </div>
        </div>
    )
}

export default Login