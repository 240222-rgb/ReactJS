import "./RegistrarUsuario.css";

function RegistrarUsuario() {
  return (
    <div className="registro-container">
      <form className="registro-form">
        <h2>Registrar Usuario</h2>
        
        <label>Contraseña</label>
        <input type="password" name="password" />

        <label>Correo Electrónico</label>
        <input type="text" name="email" />

        <label>Username</label>
        <input type="text" name="username" />

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegistrarUsuario;