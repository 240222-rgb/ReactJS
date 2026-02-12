import "./Contacto.css";

function Contacto() {
  return (
    <section className="contacto-section">
      <h2 className="contacto-titulo">Contacto</h2>

      <p className="contacto-subtitulo">
        Estamos listos para ayudarte en tu camino musical.
      </p>

      <div className="contacto-contenedor">
        <div className="contacto-card">
          <h3>📍 Dirección</h3>
          <p>Av. Musical 123, Huauchinango, Puebla</p>
        </div>

        <div className="contacto-card">
          <h3>📞 Teléfono</h3>
          <p>+52 764 132 02 02</p>
        </div>

        <div className="contacto-card">
          <h3>📧 Correo</h3>
          <p>contacto@musicstoreJoax.com</p>
        </div>

        <div className="contacto-card">
          <h3>🕒 Horarios</h3>
          <p>Lunes a Viernes: 9am - 6pm</p>
          <p>Sábados: 10am - 3pm</p>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
