import "./Sucursales.css";

const sucursales = [
  {
    id: 1,
    nombre: "Sucursal Centro",
    direccion: "Av. Principal 123, Huauchinango, Puebla",
    telefono: "+56 9 1234 5678",
    imagen: "https://www.lugaresturisticosenmexico.com/wp-content/uploads/2020/01/HUACHINANGO-PUEBLA-PUEBLO-MAGICO.jpg",
  },
  {
    id: 2,
    nombre: "Sucursal Norte",
    direccion: "Calle Norte 456, Xicotepec, Puebla",
    telefono: "+56 9 2345 6789",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlnS2AApwQX5RcYEHJHXkdTXypmjRg8niciQ&s",
  },
  {
    id: 3,
    nombre: "Sucursal Sur",
    direccion: "Av. Sur 789, Zocalo, Puebla",
    telefono: "+56 9 3456 7890",
    imagen: "https://i.pinimg.com/736x/85/2d/8f/852d8fda7303d679f016c78d9a6c7ff9.jpg",
  },
  {
    id: 4,
    nombre: "Sucursal Este",
    direccion: "Calle Este 101, Chignahuapan, Puebla",
    telefono: "+56 9 4567 8901",
    imagen: "https://mexicorutamagica.mx/wp-content/uploads/2021/07/chignahuapan_001-tw-CanalOnceTV.jpg",
  },
];

function Sucursales() {
  return (
    <div className="sucursales-container">
      <h2 className="sucursales-titulo">Nuestras Sucursales</h2>
      <p className="sucursales-descripcion">
        Conoce nuestras ubicaciones y ven a visitarnos en la ciudad.
      </p>

      <div className="sucursales-grid">
        {sucursales.map((sucursal) => (
          <div className="sucursal-card" key={sucursal.id}>
            <img src={sucursal.imagen} alt={sucursal.nombre} loading="lazy" />
            <h3>{sucursal.nombre}</h3>
            <p>{sucursal.direccion}</p>
            <p>Tel: {sucursal.telefono}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sucursales;
