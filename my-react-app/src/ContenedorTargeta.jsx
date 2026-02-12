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
        titulo="La música es el lenguaje universal del alma"
        descripcion="La música no necesita traducción. No importa el idioma o el país, todos podemos sentirla."
      />

      <Tarjeta
        image={img2}
        titulo="Donde las palabras fallan, la música habla."
        descripcion="Hay emociones que no podemos explicar con palabras, pero una canción puede expresarlas perfectamente."
      />

      <Tarjeta
        image={img3}
        titulo="La música puede cambiar el mundo."
        descripcion="Una canción puede inspirar, motivar o sanar. Si cambia a las personas, también puede transformar la sociedad."
      />

      <Tarjeta
        image={img4}
        titulo="La música convierte momentos ordinarios en recuerdos extraordinarios."
        descripcion="Muchas veces asociamos canciones con momentos importantes de nuestra vida."
      />
    </div>
  );
}

ContenedorTargeta.propTypes = {
  vista: PropTypes.string.isRequired,
};

export default ContenedorTargeta;
