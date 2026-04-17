import { useState, useEffect } from 'react';
import api from './Services/api';
import './registrarUsuario.css';

function RegistrarUsuario({usuarioEditado, limpiarSeleccion, onActualizacionExitosa}) {
  const[username, setUsername] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

useEffect(() => {
    if (usuarioEditado) {
      setUsername(usuarioEditado.username);
      setEmail(usuarioEditado.email);
      setPassword(usuarioEditado.password);
    } else {
      resetForm();
    }
},[usuarioEditado]);

const resetForm = () => {
    setUsername('');
    setEmail('');
    setPassword('');
};

const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoUsuario = { username, email, password };
    try{
      if (usuarioEditado) {
        const response = await api.put(`/users/${usuarioEditado.id}`, nuevoUsuario);
        console.log('Usuario actualizado:', response.data);
        alert('Usuario actualizado exitosamente');
        limpiarSeleccion();
      } else {
        const response = await api.post('/users', nuevoUsuario);
        console.log('Usuario registrado:', response.data);
        alert('Usuario registrado con éxito');
        resetForm();
      }
      if (onActualizacionExitosa) onActualizacionExitosa();
    } catch (error) { 
      console.error('Error al registrar:', error);
      alert('Error al procesar la solicitud');
    }
};

  return (
    <div className="registrar-container">
      <h2>Registrar Usuario</h2>
      <form onSubmit={handleSubmit} className="registrar-form">

        <div className="form-group">
          <label htmlFor="username">Nombre de usuario</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit">{usuarioEditado ? 'Actualizar' : 'Registrar'}</button>
      </form>
    </div>
  );
}

export default RegistrarUsuario;

