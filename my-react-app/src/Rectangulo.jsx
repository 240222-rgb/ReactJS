import Mapa from './Mapa';
import "./Rectangulo.css";

function Rectangulo() {
  return (
    <section className="rectangulo">
      <div className="rectangulo-overlay">
        <h2>Diseño Creativo</h2>
        <p>Ideas visuales que conectan con tu marca</p>
        <Mapa 
          lat = {20.2682762109786}
          lng = {-97.9572129259522}
          nombre_sucursal={"Sucursal Norte"}
        />
      </div>
    </section>
  );
}

export default Rectangulo;
