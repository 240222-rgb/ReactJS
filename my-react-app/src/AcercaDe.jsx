import "./AcercaDe.css";

function AcercaDe() {
  return (
    <section className="acerca-section">
      <h2 className="acerca-titulo">Sobre Nuestra Empresa</h2>

      <p className="acerca-subtitulo">
        Pasión por la música, compromiso con la calidad.
      </p>

      <div className="acerca-card">
        <p>
          Somos una tienda especializada en instrumentos musicales de alta
          calidad para músicos principiantes y profesionales.
        </p>

        <p>
          Ofrecemos guitarras acústicas y eléctricas, teclados, baterías,
          bajos y accesorios seleccionados cuidadosamente para garantizar
          el mejor sonido y rendimiento.
        </p>

        <p>
          Creemos que la música transforma vidas, por eso trabajamos con
          pasión para apoyar a cada artista en su camino musical.
        </p>
      </div>
    </section>
  );
}

export default AcercaDe;
