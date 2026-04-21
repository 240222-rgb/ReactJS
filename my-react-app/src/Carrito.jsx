import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from './Services/api';
import './Carrito.css';
import {
  getLocalCarts,
  removeLocalCart,
  removeProductFromLocalCart,
} from './Services/cartStorage';

function Carrito({ role, userId }) {
  const [carritos, setCarritos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const esAdmin = role === 'admin';

  useEffect(() => {
    const obtenerCarritos = async () => {
      try {
        const response = await api.get('/carts');
        const remoteCarts = Array.isArray(response.data) ? response.data : [];
        const localCarts = getLocalCarts();
        const localCartIds = new Set(localCarts.map((cart) => String(cart.id)));
        const mergedCarts = [
          ...remoteCarts.filter((cart) => !localCartIds.has(String(cart.id))),
          ...localCarts,
        ];
        setCarritos(mergedCarts);
      } catch (error) {
        console.error('Error al obtener carritos:', error);
        setCarritos(getLocalCarts());
      } finally {
        setCargando(false);
      }
    };

    obtenerCarritos();
  }, []);

  const carritosVisibles = carritos.filter(
    (carrito) => esAdmin || String(carrito.userId) === String(userId)
  );

  const handleEliminar = (id) => {
    const confirmar = window.confirm('Eliminar este carrito?');
    if (!confirmar) return;

    if (String(id).startsWith('local-')) {
      const updatedLocalCarts = removeLocalCart(id);
      setCarritos((prevCarritos) => [
        ...prevCarritos.filter((carrito) => !String(carrito.id).startsWith('local-')),
        ...updatedLocalCarts,
      ]);
      return;
    }

    setCarritos(carritos.filter((carrito) => carrito.id !== id));
  };

  const handleEliminarProducto = (carritoId, productId) => {
    const confirmar = window.confirm('Eliminar este producto del carrito?');
    if (!confirmar) return;

    if (String(carritoId).startsWith('local-')) {
      const updatedLocalCarts = removeProductFromLocalCart(carritoId, productId);
      setCarritos((prevCarritos) => [
        ...prevCarritos.filter((carrito) => !String(carrito.id).startsWith('local-')),
        ...updatedLocalCarts,
      ]);
      return;
    }

    setCarritos(
      carritos.map((carrito) => {
        if (carrito.id === carritoId) {
          return {
            ...carrito,
            products: carrito.products.filter(
              (producto) => producto.productId !== productId
            ),
          };
        }
        return carrito;
      })
    );
  };

  if (cargando) {
    return (
      <div className="contenedorVista">
        <p>Cargando carritos...</p>
      </div>
    );
  }

  return (
    <div className="contenedorVista">
      <h2 className="section-title">
        {esAdmin ? 'Carritos Registrados' : 'Mi Carrito'}
      </h2>

      <div className="inicio-grid">
        {carritosVisibles.length > 0 ? carritosVisibles.map((carrito) => {
          const totalCantidad = carrito.products.reduce(
            (acc, producto) => acc + producto.quantity,
            0
          );

          return (
            <div key={carrito.id} className="tarjetaDiv">
              <h3>Carrito ID: {carrito.id}</h3>

              <p>
                <strong>Usuario:</strong> {carrito.userId}
              </p>

              <p>
                <strong>Fecha:</strong> {new Date(carrito.date).toLocaleDateString()}
              </p>

              <p>
                <strong>Productos:</strong>
              </p>

              <ul>
                {carrito.products.map((producto, index) => (
                  <li key={index} className="producto-item">
                    <span>Producto ID: {producto.productId} | Cantidad: {producto.quantity}</span>
                    <button
                      className="btn-eliminar-producto"
                      onClick={() => handleEliminarProducto(carrito.id, producto.productId)}
                    >
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>

              <p>
                <strong>Total productos:</strong> {totalCantidad}
              </p>

              <button
                className="btn-eliminar"
                onClick={() => handleEliminar(carrito.id)}
              >
                Eliminar carrito
              </button>
            </div>
          );
        }) : <p>No hay productos en el carrito.</p>}
      </div>
    </div>
  );
}

Carrito.propTypes = {
  role: PropTypes.string,
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Carrito;
