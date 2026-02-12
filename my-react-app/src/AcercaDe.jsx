import "./AcercaDe.css";

function AcercaDe() {
  return (
    <section className="acerca-section">
      <div className="acerca-container">

        <div className="acerca-texto">
          <h2 className="acerca-titulo">Sobre Nuestra Empresa</h2>
          <p className="acerca-subtitulo">
            Pasión por la música, compromiso con la calidad.
          </p>

          <p className="acerca-descripcion">
            Somos una tienda especializada en instrumentos musicales de alta
            calidad para músicos principiantes y profesionales.
          </p>

          <p className="acerca-descripcion">
            Ofrecemos guitarras acústicas y eléctricas, teclados, baterías,
            bajos y accesorios seleccionados cuidadosamente para garantizar
            el mejor sonido y rendimiento.
          </p>

          <p className="acerca-descripcion">
            Creemos que la música transforma vidas, por eso trabajamos con
            pasión para apoyar a cada artista en su camino musical.
          </p>
        </div>

        <div className="acerca-cards">
          <div className="info-card">
            <h3>🎸 Calidad</h3>
            <p>Instrumentos seleccionados para ofrecer el mejor sonido.</p>
          </div>

          <div className="info-card">
            <h3>🎵 Pasión</h3>
            <p>Amamos la música tanto como tú.</p>
          </div>

          <div className="info-card">
            <h3>🚀 Compromiso</h3>
            <p>Apoyamos tu crecimiento musical en cada etapa.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AcercaDe;
