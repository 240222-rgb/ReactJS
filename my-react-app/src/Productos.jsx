import './Productos.css';
import { useEffect, useState } from 'react';
import api from './Services/api';
import RegistrarProducto from './RegistrarProducto';

function Productos() {
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
            <RegistrarProducto 
                productoEditado={productoSeleccionado}
                limpiarSeleccion={setProductoSeleccionado}
                onActualizacionExitosa={obtenerProductos}
            ></RegistrarProducto>
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
                                    <button className="btn-edit" onClick={() => setProductoSeleccionado(producto)}>Editar</button>
                                <button className="btn-delete">Eliminar</button>
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