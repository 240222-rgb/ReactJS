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
            <h2>Bienvenido a mi sitio</h2>
        </div>
    );
}

function Logo(){
    return(
        <div classNmae="Logo">
            <img src={miLogo} alt="React Logo" />
        </div>

    );
}

function Menu(){
    return (
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Contacto</li>
                <li>Sucursales</li>
            </ul>
        </nav>
    );
}

function Redes(){
    return (
        <nav>
            <ul>
                 <li><img src={email} alt="Email" /></li>
                 <li><img src={facebook} alt="facebook" /></li>
                 <li><img src={instagram} alt="instagram" /></li>
                 <li><img src={social} alt="social" /></li>
            </ul>
        </nav>
    );
}
export default Encabezado 