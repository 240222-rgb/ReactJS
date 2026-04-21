import { useState, useEffect } from 'react';
import api from './Services/api';
import './registrarUsuario.css';

function RegistrarUsuario({ usuarioEditado, limpiarSeleccion, onActualizacionExitosa }) {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('cliente');

  const resetForm = () => {
    setNombre('');
    setDireccion('');
    setTelefono('');
    setGmail('');
    setPassword('');
    setRol('cliente');
  };

  useEffect(() => {
    if (usuarioEditado) {
      setNombre(usuarioEditado.nombre || usuarioEditado.username || '');
      setDireccion(usuarioEditado.direccion || '');
      setTelefono(usuarioEditado.telefono || '');
      setGmail(usuarioEditado.gmail || usuarioEditado.email || '');
      setPassword(usuarioEditado.password || '');
      setRol(usuarioEditado.rol || 'cliente');
    } else {
      resetForm();
    }
  }, [usuarioEditado]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoUsuario = {
      nombre,
      username: nombre,
      direccion,
      telefono,
      gmail,
      email: gmail,
      password,
      rol,
    };

    try {
      if (usuarioEditado) {
        const usuarioId = usuarioEditado.id || usuarioEditado._id;
        const response = await api.put(`/users/${usuarioId}`, nuevoUsuario);
        console.log('Usuario actualizado:', response.data);
        alert('Usuario actualizado exitosamente');
        limpiarSeleccion();
      } else {
        const response = await api.post('/users', nuevoUsuario);
        console.log('Usuario registrado:', response.data);
        alert('Usuario registrado con exito');
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
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="direccion">Direccion</label>
          <input type="text" id="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Telefono</label>
          <input type="tel" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="gmail">Gmail</label>
          <input type="email" id="gmail" name="gmail" value={gmail} onChange={(e) => setGmail(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="rol">Rol</label>
          <select id="rol" value={rol} onChange={(e) => setRol(e.target.value)} required>
            <option value="admin">Admin</option>
            <option value="cliente">Cliente</option>
          </select>
        </div>

        <button type="submit">{usuarioEditado ? 'Actualizar' : 'Registrar'}</button>
      </form>
    </div>
  );
}

export default RegistrarUsuario;
