import PropTypes from "prop-types";
import AcercaDe from "./AcercaDe";
import Galeria from "./Galeria";
import Sucursales from "./Sucursales";
import Contacto from "./Contacto";
import Productos from "./Productos";
import "./ContenedorTarjeta.css";

import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";

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

  if (vista === "Productos") {
    return <Productos />;
  }

  if (vista === "Galeria") {
    return <Galeria />;
  }

  if (vista === "Sucursales") {
    return <Sucursales />;
  }

  if (vista === "Contacto") {
    return <Contacto />;
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
