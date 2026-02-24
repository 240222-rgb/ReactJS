import { useEffect, useState } from "react";
import api from "./Services/api";
import "./Carrito.css"; 

function Carrito() {
  const [carritos, setCarritos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerCarritos = async () => {
      try {
        const response = await api.get("/carts");
        setCarritos(response.data);
      } catch (error) {
        console.error("Error al obtener carritos:", error);
      } finally {
        setCargando(false);
      }
    };

    obtenerCarritos();
  }, []);

  const handleEliminar = (id) => {
    const confirmar = window.confirm("¿Eliminar este carrito?");
    if (confirmar) {
      setCarritos(carritos.filter((carrito) => carrito.id !== id));
    }
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
      <h2 className="section-title">Carritos Registrados</h2>

      <div className="inicio-grid">
        {carritos.map((carrito) => {
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
                <strong>Fecha:</strong>{" "}
                {new Date(carrito.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Productos:</strong>
              </p>
              <ul>
                {carrito.products.map((producto, index) => (
                  <li key={index}>
                    Producto ID: {producto.productId} | Cantidad: {producto.quantity}
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
                Eliminar
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carrito;




