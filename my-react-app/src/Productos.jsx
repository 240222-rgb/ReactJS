import { useState, useEffect } from "react";
import api from "./Services/api";
import "./Productos.css";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await api.get("/products");
        setProductos(response.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setCargando(false);
      }
    };

    obtenerProductos();
  }, []);

  if (cargando) return <p>Cargando productos...</p>;

  return (
    <div className="productos-container">
      <h1 className="productos-titulo">Catálogo de Productos</h1>
      <p className="productos-descripcion">
        Explora nuestra colección de productos disponibles con los mejores precios.
      </p>

      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.image} alt={producto.title} />
            <h3>{producto.title}</h3>
            <p>Precio:</p>
            <span>${producto.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;

