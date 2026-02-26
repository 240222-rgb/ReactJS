import { useState, useEffect } from "react";
import api from "./Services/api";
import "./Productos.css";
import RegistrarProducto from "./RegistrarProducto";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
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


  const añadirAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    alert(`${producto.title} añadido al carrito`);
  };

  
  const eliminarProducto = (id) => {
    const nuevosProductos = productos.filter(
      (producto) => producto.id !== id
    );
    setProductos(nuevosProductos);
  };

  if (cargando) return <p>Cargando productos...</p>;

  return (
    <div className="productos-container">
      <RegistrarProducto></RegistrarProducto>
      <h1 className="productos-titulo">Catálogo de Productos</h1>
      <p className="productos-descripcion">
        Explora nuestra colección de productos disponibles con los mejores precios.
      </p>

      <h2 className="carrito-contador">
        🛒 Carrito: {carrito.length} productos
      </h2>

      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.image} alt={producto.title} />
            <h3>{producto.title}</h3>
            <p>Precio:</p>
            <span>${producto.price}</span>

            <div className="botones">
              <button
                className="btn-carrito"
                onClick={() => añadirAlCarrito(producto)}
              > Añadir al carrito
            
              </button>

              <button
                className="btn-eliminar"
                onClick={() => eliminarProducto(producto.id)}
              > Eliminar 
              
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;