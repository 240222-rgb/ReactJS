import './Login.css';
import { useState } from 'react';
import api from './Services/api';
import { useAuth } from './AuthContext';
import PropTypes from 'prop-types';

const Login = ({ cambiarVista }) => {
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setError('');

      const response = await api.post('/login/', {
        email,
        password,
      });

      login(response.data);
      cambiarVista('Inicio');

      alert('Login exitoso!');
    } catch (err) {
      console.error('Error en login:', err);
      setError('Usuario o contrasena incorrecta');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesion</h2>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label>Nombre de usuario</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu email"
            />
          </div>

          <div className="form-group">
            <label>Contrasena</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Tu contrasena"
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="btn-login">
            Acceder
          </button>

          <div className="login-options">
            <button
              type="button"
              className="btn-link"
              onClick={() => cambiarVista('Registro')}
            >
              Crear cuenta
            </button>
            <button type="button" className="btn-link">Recuperar contrasena</button>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  cambiarVista: PropTypes.func.isRequired,
};

export default Login;
