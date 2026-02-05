import Tarjeta from "./Tarjeta";
import img1 from "./assets/tarjeta1.jpg";
import img2 from "./assets/tarjeta2.jpg";
import img3 from "./assets/tarjeta3.jpg";
import img4 from "./assets/tarjeta4.jpg";

function ContenedorTarjeta() {
  return (
    <div className="ContenedorTargeta">
      <Tarjeta
        imagen={img1}
        titulo="Título de la Tarjeta"
        descripcion="Descripción de la tarjeta"
      />
      <Tarjeta
        imagen={img2}
        titulo="Título de la Tarjeta"
        descripcion="Descripción de la tarjeta"
      />
      <Tarjeta
        imagen={img3}
        titulo="Título de la Tarjeta"
        descripcion="Descripción de la tarjeta"
      />
      <Tarjeta
        imagen={img4}
        titulo="Título de la Tarjeta"
        descripcion="Descripción de la tarjeta"
      />
    </div>
  );
}

export default ContenedorTarjeta;
