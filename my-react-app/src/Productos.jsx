import {  useState, useEffect } from 'react';
import api from './Services/api';
import "./Productos.css";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, SetCargando] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      try{
        const response = await api.get('/products');
        setProductos(response.data);
      }catch(error){
        console.error('Error al obtener productos:' , error);
      }finally{
        SetCargando(false);
      }
    };
    obtenerProductos();
  },[]);

  if(cargando) return<p>Cargando productos...</p>
  return (
    <div className="productoDiv">
      <h1>Catalogo Productos</h1>
      {productos.map((producto) => (
        //inicia
          <div key={producto.id}>
            <p>{producto.title}</p>
            <p>{producto.price}</p>
            <img src={producto.image}/>
          </div>
          //card termina aqui
      ))}
    </div>
  );
}
export default Productos;


