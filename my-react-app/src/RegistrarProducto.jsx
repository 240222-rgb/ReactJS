/**import { useState } from "react";
import api from './Services/api';

function RegistrarProducto(){
  const [productos, setProductos] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });

  const handlechange = (e) => {
    setProductos({
      ...productos,
      [e.target.name]: e.target.value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    try{
        const response = await api.post('/products', productos);
        setProductos(response.data);
        alert('productos registrado exitosamente');
        console.log(productos);
        setProductos({
          tittle: '',
          price: '',
          description: '',
          category: '',
          image: ''

        })
    }catch(error){
      console.error('Error al registrar producto:', error);
    }
  }
  return (
    <div>
      <h1>Registar Productos</h1>
      <form onSubmit={handleSubmit}></form>
    </div>
  )

}*/



import "./RegistrarProducto.css";

function RegistrarProducto() {
  return (
    <div className="registro-container">
      <form className="registro-form">
        <h2>Registrar Producto</h2>

        <label>Título</label>
        <input type="text" name="titulo" />

        <label>Precio</label>
        <input type="text" name="price" />

        <label>Descripción</label>
        <input type="text" name="description" />

        <label>Categoría</label>
        <input type="text" name="category" />

        <label>Imagen (URL)</label>
        <input type="text" name="imagen" />

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegistrarProducto;