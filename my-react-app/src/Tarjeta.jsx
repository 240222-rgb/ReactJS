import "./Tarjeta.css";

function Tarjeta({ imagen, titulo, descripcion }) {
  return (
    <div className="tarjeta">
      <div
        className="tarjeta-imagen"
        style={{ backgroundImage: `url(${imagen})` }}
      ></div>

      <div className="tarjeta-contenido">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <a href="#">Leer más...</a>
      </div>
    </div>
  );
}

export default Tarjeta;
