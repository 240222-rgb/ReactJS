import PropTypes from "prop-types";
import AcercaDe from "./AcercaDe";
import "./ContenedorTarjeta.css";

import img1 from "./assets/tarjeta1.jpg";
import img2 from "./assets/tarjeta2.jpg";
import img3 from "./assets/tarjeta3.jpg";
import img4 from "./assets/tarjeta4.jpg";


function Tarjeta({ image, titulo, descripcion }) {
  return (
    <div className="Tarjeta">
      <img src={image} alt={titulo} />
      <div className="Tarjeta-contenido">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
    </div>
  );
}

Tarjeta.propTypes = {
  image: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
};


function ContenedorTargeta({ vista }) {

  if (vista === "AcercaDe") {
    return <AcercaDe />;
  }

 
  return (
    <div className="ContenedorTargeta">
      <Tarjeta
        image={img1}
        titulo="Super Gato 1"
        descripcion="El es el gato que piensa que es la monalisa"
      />

      <Tarjeta
        image={img2}
        titulo="Super Gato 2"
        descripcion="El gato privilegiado wueroo"
      />

      <Tarjeta
        image={img3}
        titulo="Super Gato 3"
        descripcion="El gato que no se rinde nunca"
      />

      <Tarjeta
        image={img4}
        titulo="Super Gato 4"
        descripcion="El gato que siempre está en movimiento"
      />
    </div>
  );
}

ContenedorTargeta.propTypes = {
  vista: PropTypes.string.isRequired,
};

export default ContenedorTargeta;
