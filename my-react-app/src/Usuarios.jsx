import { useState, useEffect } from "react";
import "./Usuarios.css";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="usuarios-container">
      <h1>Lista de Usuarios</h1>

      <table className="usuarios-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Username</th>
            <th>Password</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {usuarios.map((user) => (
            <tr key={user.id}>
              <td>{user.name.firstname}</td>
              <td>{user.name.lastname}</td>
              <td>
                {user.address.number} {user.address.street},{" "}
                {user.address.city}
              </td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td className="acciones">
                <button className="btn-editar">Editar</button>
                <button className="btn-eliminar">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Usuarios;