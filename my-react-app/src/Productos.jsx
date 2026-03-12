import './Productos.css';
import { useEffect, useState } from 'react';
import api from './Services/api';
import RegistrarProducto from './RegistrarProducto';
import PropTypes from 'prop-types';

function Productos({ puedeEditar = false }) {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    const obtenerProductos = async () => {
        try {
            const response = await api.get('/products');
            setProductos(response.data);
        } catch(error) {
            console.error('error al obtener productos', error);
        } finally {
            setCargando(false);
        };
    };

    useEffect(() => {
        obtenerProductos();
    },[]);

    if(cargando) return <p>Cargando productos.......</p>;

    return (
        <div className="productos">
            {puedeEditar ? (
                <RegistrarProducto 
                productoEditado={productoSeleccionado}
                limpiarSeleccion={setProductoSeleccionado}
                onActualizacionExitosa={obtenerProductos}
            ></RegistrarProducto>
            ) : null}
            <h1>Catálogo de Productos</h1>
            {productos && productos.length > 0 ? (
                <div className="grilla-productos">
                    {productos.map((producto) => (
                        <div key={producto.id} className="producto-card">
                            <img src={producto.image} alt={producto.title} />
                            <h3>{producto.title}</h3>
                            <p className="price">${producto.price}</p>
                            <div className="producto-actions">
                                <button className="btn-add">Añadir al carrito</button>
                                {puedeEditar ? (
                                    <>
                                        <button className="btn-edit" onClick={() => setProductoSeleccionado(producto)}>Editar</button>
                                        <button className="btn-delete">Eliminar</button>
                                    </>
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No hay productos disponibles</p>
            )}
        </div>
    );
}

export default Productos;

Productos.propTypes = {
    puedeEditar: PropTypes.bool
};
