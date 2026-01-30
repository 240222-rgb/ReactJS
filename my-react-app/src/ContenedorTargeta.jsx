import './ContenedorTarjeta.css';
import imgtargeta from './assets/imagen2.jpg';

function ContenedorTargeta() {
    return (
        <div className="ContenedorTargeta">
            <h2>Contenedor de Tarjetas</h2>
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
        </div>
    );
}
export default ContenedorTargeta;

function Tarjeta() {
    return(
        <div className="Tarjeta">
            <img src={imgtargeta} alt="Imagen Tarjeta" />
            <h3>Titulo de la Tarjeta</h3>
            <p>Descripcion de la tarjeta</p>
            < a href='#'>Leer mas...</a>
        </div>
    );
}
    
