import "./Contacto.css";

function Contacto() {
  return (
    <section className="contacto-section">
      <h2 className="contacto-titulo">Contacto</h2>
      <p className="contacto-subtitulo">
        Estamos listos para ayudarte en tu camino musical.
      </p>

      <div className="contacto-wrapper">
        
        {/* LADO IZQUIERDO - INFORMACIÓN */}
        <div className="contacto-info">
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

        {/* LADO DERECHO - FORMULARIO */}
        <div className="formulario-contenedor">
          <h3 className="formulario-titulo">Envíanos un mensaje</h3>

          <form className="formulario-contacto">
            <input type="text" placeholder="Nombre completo" required />
            <input type="email" placeholder="Correo electrónico" required />
            <input type="tel" placeholder="Teléfono" required />
            <input type="text" placeholder="Asunto" required />
            <textarea
              placeholder="Escribe tu mensaje aquí..."
              rows="4"
              required
            ></textarea>

            <button type="submit">Enviar mensaje</button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contacto;
