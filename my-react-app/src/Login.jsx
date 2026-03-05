import './Login.css';
import { useState } from 'react';

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const iniciarSesion = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

      const data = await response.json();

      console.log("TOKEN:", data.token);

      alert("Iniciaste sesión correctamente");

    } catch (error) {
      console.error("Error en login", error);
      alert("Error al iniciar sesión");
    }
  };

  return (
    <div className="login">
      <div className="login-card">

        <h1>Iniciar Sesión</h1>

        <form onSubmit={iniciarSesion} className="login-form">

          <div className="input-group">
            <label>Usuario</label>
            <input
              type="text"
              placeholder="Ingresa tu usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn-login">
            Acceder
          </button>

        </form>

        <div className="login-links">
          <a href="#">Crear cuenta</a>
          <a href="#">Recuperar contraseña</a>
        </div>

      </div>
    </div>
  );
}

export default Login;