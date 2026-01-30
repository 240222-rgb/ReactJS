import miLogo from './assets/Logo.png';
import email from './assets/Email.png';  
import facebook from './assets/facebook.png'; 
import instagram from './assets/instagram.png'; 
import social from './assets/social.png';
import './Encabezado.css';
function Encabezado (){
    return (
        <div className="Encabezado">
            <Logo />
            <Menu />
            <Redes />
        
        </div>
    );
}

function Logo(){
    return(
        <div className="logoDiv">
            <img src={miLogo} alt="React Logo" />
        </div>

    );
}

function Menu(){
    return (
        <div className="menuDiv">
            <ul>
                <li><a href='#'>Inicio</a></li>
                <li><a href='#'>Acerca de</a></li>
                <li><a href='#'>Productos</a></li>
                <li><a href='#'>Galeria</a></li>
                <li><a href='#'>Clientes</a></li>
                <li><a href='#'>Contacto</a></li>
                <li><a href='#'>Sucursales</a></li>
            </ul>
        </div>
    );
}

function Redes(){
    return (
        <div className="redesDiv">
            <ul>
                 <li><a href='#'><img src={email} alt="Email" /></a></li>
                 <li><a href='#'><img src={facebook} alt="facebook" /></a></li>
                 <li><a href='#'><img src={instagram} alt="instagram" /></a></li>
                 <li><a href='#'><img src={social} alt="social" /></a></li>
            </ul>
        </div>
    );
}
export default Encabezado 