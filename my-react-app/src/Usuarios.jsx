import './Usuarios.css';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from './Services/api';
import RegistrarUsuario from './RegistrarUsuario';

function Usuarios(props) {
    const { mostrarLista = true } = props;
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
            const obtenerUsuarios = async () => {
            try{
                const response = await api.get('/usuarios');
                setUsuarios(response.data);
            }catch(error){
                console.error('error al obtener usuarios', error);
            }finally{
                setCargando(false);
            }
        };
    useEffect(() => {
        obtenerUsuarios();
    },[]);

    if(cargando) return <p>Cargando usuarios.......</p>;

    return (
        <div className="usuarios">
            <RegistrarUsuario 
            usuarioEditado={usuarioSeleccionado}
            limpiarSeleccion={setUsuarioSeleccionado}
            onActualizacionExitosa={obtenerUsuarios}
            />

            {mostrarLista ? (
                <>
                    <h1>Usuarios Registrados</h1>
                    <table className="tabla-usuarios">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Direccion</th>
                                <th>Telefono</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Rol</th>
                                <th>FechaRegistro</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => (
                                <tr key={usuario.id || usuario._id || usuario.email}>
                                    <td>{usuario.nombre || usuario.username || '—'}</td>
                                    <td>{usuario.email || '—'}</td>
                                    <td>{usuario.password || '—'}</td>
                                    <td>{usuario.direccion || (usuario.address ? `${usuario.address?.street || ''} ${usuario.address?.number || ''} ${usuario.address?.city || ''} ${usuario.address?.zipcode || ''}` : '—')}</td>
                                    <td>{usuario.telefono || '—'}</td>
                                    <td>{usuario.rol || '—'}</td>
                                    <td>{usuario.fechaRegistro || usuario.createdAt || '—'}</td>
                                    <td><button className="editar" onClick={()=>setUsuarioSeleccionado(usuario)}>Editar</button></td>
                                    <td><button className="eliminar">Eliminar</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            ) : null}
        </div>
    );
}

Usuarios.propTypes = {
    mostrarLista: PropTypes.bool,
};

export default Usuarios;

