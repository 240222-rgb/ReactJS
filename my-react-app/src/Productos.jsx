import './Productos.css';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from './Services/api';
import RegistrarProducto from './RegistrarProducto';
import { useAuth } from './AuthContext';
import { addProductToLocalCart } from './Services/cartStorage';

function Productos({ puedeEditar = false }) {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const { isLoggedIn, role, userId } = useAuth();

    const obtenerProductos = async () => {
        try {
            const response = await api.get('/productos');
            setProductos(response.data);
        } catch(error) {
            console.error('error al obtener productos', error);
        } finally {
            setCargando(false);
        }
    };

    const handleEliminar = async (id) => {
        if (window.confirm('Estas seguro de que deseas eliminar este producto?')) {
            try {
                await api.delete(`/productos/${id}`);
                alert('Producto eliminado exitosamente');
                obtenerProductos();
            } catch (error) {
                console.error('Error al eliminar producto:', error);
                alert('Error al eliminar el producto');
            }
        }
    };

    const handleAgregarAlCarrito = (producto) => {
        if (!isLoggedIn) {
            alert('Inicia sesion para agregar productos al carrito');
            return;
        }

        if (role === 'admin') {
            alert('El administrador no usa carrito de compras');
            return;
        }

        if (!userId) {
            alert('No se encontro el usuario actual. Vuelve a iniciar sesion.');
            return;
        }

        addProductToLocalCart({
            userId,
            productId: producto.id,
        });

        alert(`${producto.nombre} se agrego al carrito`);
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
                />
            ) : null}
            <h1>Catalogo de Productos</h1>
            {productos && productos.length > 0 ? (
                <div className="grilla-productos">
                    {productos.map((producto) => (
                        <div key={producto.id} className="producto-card">
                            {producto.imagenes ? <img src={producto.imagenes} alt={producto.nombre} /> : null}
                            <h3>{producto.nombre}</h3>
                            <p><strong>Direccion:</strong> {producto.direccion}</p>
                            <p className="price"><strong>Precio:</strong> ${producto.precio}</p>
                            <p><strong>Stock:</strong> {producto.stock}</p>
                            <p><strong>Categoria ID:</strong> {producto.id_categoria}</p>
                            <div className="producto-actions">
                                <button
                                    type="button"
                                    className="btn-add"
                                    onClick={() => handleAgregarAlCarrito(producto)}
                                >
                                    Anadir al carrito
                                </button>
                                {puedeEditar ? (
                                    <>
                                        <button
                                            type="button"
                                            className="btn-edit"
                                            onClick={() => setProductoSeleccionado(producto)}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            type="button"
                                            className="btn-delete"
                                            onClick={() => handleEliminar(producto.id)}
                                        >
                                            Eliminar
                                        </button>
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

Productos.propTypes = {
    puedeEditar: PropTypes.bool,
};

export default Productos;
