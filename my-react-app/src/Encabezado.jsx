import miLogo from './assets/Logo.png';
import email from './assets/Email.png';  
import facebook from './assets/facebook.png'; 
import instagram from './assets/instagram.png'; 
import social from './assets/social.png';
import PropTypes from 'prop-types';
import './Encabezado.css';
import Clima from './Clima';
import { useAuth } from './AuthContext';

function Encabezado ({cambiarVista}){
    return (
        <div className="Encabezado">
            <Logo />
            <Menu cambiarVista={cambiarVista} />
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

function Menu({ cambiarVista }) {
  const { isLoggedIn, logout } = useAuth();
  const handleLogout = () => {
    logout();
    cambiarVista('Inicio');
  }

  return (
    <div className="menuDiv">
      <ul>
        <li onClick={() => cambiarVista("Inicio")}>Inicio</li>
        <li onClick={() => cambiarVista("AcercaDe")}>Acerca de</li>
        <li onClick={() => cambiarVista("Productos")}>Productos</li>

        {isLoggedIn ? (
          <>
            <li onClick={() => cambiarVista("Usuarios")}>Usuarios</li>
            <li onClick={() => cambiarVista("Carrito")}>Carrito</li>
            <li onClick={handleLogout}>Cerrar sesión</li>
          </>
        ) : (
          <>
            <li onClick={() => cambiarVista("Login")}>Login</li>
          </>
        )}

        <li onClick={() => cambiarVista("Galeria")}>Galeria</li>
        <li onClick={() => cambiarVista("Sucursales")}>Sucursales</li>
        <li onClick={() => cambiarVista("Contacto")}>Contacto</li>
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
            <Clima />
            </div>
    );
}

Menu.propTypes = {
    cambiarVista: PropTypes.func.isRequired
}

Encabezado.propTypes = {
    cambiarVista: PropTypes.func.isRequired
}
export default Encabezado 