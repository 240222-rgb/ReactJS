import PropTypes from 'prop-types';
import AcercaDe from './AcercaDe';
import Usuarios from './Usuarios';
import Galeria from './Galeria';
import Carrito from './Carrito';
import Categoria from './Categoria';
import Sucursales from './Sucursales';
import Contacto from './Contacto';
import Productos from './Productos';
import Login from './Login';
import { useAuth } from './AuthContext';
import './ContenedorTarjeta.css';

import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';

function Tarjeta({ image, titulo, descripcion }) {
  return (
    <div className="Tarjeta">
      <img src={image} alt={titulo} />
      <div className="Tarjeta-contenido">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
    </div>
  );
}

Tarjeta.propTypes = {
  image: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
};

function ContenedorTargeta({ vista, cambiarVista }) {
  const { role, userId } = useAuth();
  const esAdmin = role === 'admin';

  if (vista === 'AcercaDe') {
    return <AcercaDe />;
  }

  if (vista === 'Usuarios') {
    return esAdmin ? <Usuarios /> : <p>No tienes permisos para ver usuarios.</p>;
  }

  if (vista === 'Registro') {
    return <Usuarios mostrarLista={true} />;
  }

  if (vista === 'Productos') {
    return <Productos puedeEditar={esAdmin} />;
  }

  if (vista === 'Galeria') {
    return <Galeria />;
  }

  if (vista === 'Carrito') {
    return <Carrito role={role} userId={userId} />;
  }

  if (vista === 'Categorias') {
    return esAdmin ? <Categoria puedeEditar={true} /> : <p>No tienes permisos para ver categorias.</p>;
  }

  if (vista === 'Sucursales') {
    return <Sucursales />;
  }

  if (vista === 'Contacto') {
    return <Contacto />;
  }

  if (vista === 'Login') {
    return <Login cambiarVista={cambiarVista} />;
  }

  return (
    <div className="ContenedorTargeta">
      <Tarjeta
        image={img1}
        titulo="La musica es el lenguaje universal del alma"
        descripcion="La musica no necesita traduccion. No importa el idioma o el pais, todos podemos sentirla."
      />

      <Tarjeta
        image={img2}
        titulo="Donde las palabras fallan, la musica habla."
        descripcion="Hay emociones que no podemos explicar con palabras, pero una cancion puede expresarlas perfectamente."
      />

      <Tarjeta
        image={img3}
        titulo="La musica puede cambiar el mundo."
        descripcion="Una cancion puede inspirar, motivar o sanar. Si cambia a las personas, tambien puede transformar la sociedad."
      />

      <Tarjeta
        image={img4}
        titulo="La musica convierte momentos ordinarios en recuerdos extraordinarios."
        descripcion="Muchas veces asociamos canciones con momentos importantes de nuestra vida."
      />
    </div>
  );
}

ContenedorTargeta.propTypes = {
  vista: PropTypes.string.isRequired,
  cambiarVista: PropTypes.func.isRequired,
};

export default ContenedorTargeta;
