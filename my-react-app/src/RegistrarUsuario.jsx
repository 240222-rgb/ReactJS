import "./RegistrarUsuario.css";

function RegistrarUsuario() {
  return (
    <div className="registro-container">
      <form className="registro-form">
        <h2>Registrar Usuario</h2>

        <label>Nombre</label>
        <input type="text" name="nombre" />

        <label>Apellidos</label>
        <input type="text" name="apellidos" />
        
        <label>Dirección</label>
        <input type="text" name="direccion" />

        <label>Teléfono</label>
        <input type="text" name="telefono" />

        <label>Correo Electrónico</label>
        <input type="text" name="email" />

        <label>Username</label>
        <input type="text" name="username" />

        <label>Contraseña</label>
        <input type="password" name="password" />

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegistrarUsuario;