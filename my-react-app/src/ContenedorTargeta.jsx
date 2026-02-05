import "./ContenedorTarjeta.css";

import img1 from "./assets/tarjeta1.jpg";
import img2 from "./assets/tarjeta2.jpg";
import img3 from "./assets/tarjeta3.jpg";
import img4 from "./assets/tarjeta4.jpg";

function ContenedorTargeta() {
  return (
    <div className="ContenedorTargeta">

      <div className="Tarjeta">
        <img src={img1} alt="Tarjeta 1" />
        <div className="Tarjeta-contenido">
          <h3>Título 1</h3>
          <p>Texto de la tarjeta</p>
        </div>
      </div>

      <div className="Tarjeta">
        <img src={img2} alt="Tarjeta 2" />
        <div className="Tarjeta-contenido">
          <h3>Título 2</h3>
          <p>Texto de la tarjeta</p>
        </div>
      </div>

      <div className="Tarjeta">
        <img src={img3} alt="Tarjeta 3" />
        <div className="Tarjeta-contenido">
          <h3>Título 3</h3>
          <p>Texto de la tarjeta</p>
        </div>
      </div>

      <div className="Tarjeta">
        <img src={img4} alt="Tarjeta 4" />
        <div className="Tarjeta-contenido">
          <h3>Título 4</h3>
          <p>Texto de la tarjeta</p>
        </div>
      </div>

    </div>
  );
}

export default ContenedorTargeta;
