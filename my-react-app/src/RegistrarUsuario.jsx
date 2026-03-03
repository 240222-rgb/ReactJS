import { useState, useEffect } from 'react';
import api from './Services/api';
import "./RegistrarUsuario.css";

function RegistrarUsuario({usuarioEditado, limpiarSeleccion, onActualizacionExitosa}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');

  useEffect(()=>{
    if (usuarioEditado){
      setUsername(usuarioEditado.username);
      setEmail(usuarioEditado.email);
      setPasword(usuarioEditado.password);
    }else{
      resetForm();
    }
  },[usuarioEditado]);

  const resetForm =()=>{
    setUsername('');
    setEmail('');
    setPasword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoUsuario = {username, email, password};
    try{
      if(usuarioEditado){
        const response = await api.put(`/user/${usuarioEditado.ide}`, nuevoUsuario);
        console.log('Usuario Actualizado', respuesta.data)
        alert('Usuario actualizado con exito');
        limpiarSeleccion();
      }else{
        const respuesta = await api.post(`/users/`, nuevoUsuario);
        console.log('Usuario Registrado', respuesta.data);
        alert('Usuario Registrado con exito');
        resetForm();
      }
      if(onActualizacionExitosa) onActualizacionExitosa();
    }catch (error) {
      console.error('Error al registrar:', error);
      alert ('¡Error al procesar la solicitud');
    }
  };

  return (
    <div className="registro-container">
       <h2>Registrar Usuario</h2>
      <form onSubmit={handleSubmit}></form>
      <form className="registro-form">
        
        <label>Username</label>
        <input type="text" name="username" value={username} onChange={(e)=> setUsername(e.target.value)}/>

        <label>Contraseña</label>
        <input type="password" name="password" value={password} onChange={(e)=> setPasword(e.target.value)}/>

        <label>Correo Electrónico</label>
        <input type="text" name="email"  value={email} onChange={(e)=> setEmail(e.target.value)}/>

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegistrarUsuario;