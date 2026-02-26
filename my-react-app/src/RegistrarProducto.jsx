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