import "./Sucursales.css";

const sucursales = [
  {
    id: 1,
    nombre: "Sucursal Centro",
    direccion: "Av. Principal 123, Ciudad Central",
    telefono: "+56 9 1234 5678",
    imagen: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
  },
  {
    id: 2,
    nombre: "Sucursal Norte",
    direccion: "Calle Norte 456, Barrio Norte",
    telefono: "+56 9 2345 6789",
    imagen: "https://images.unsplash.com/photo-1563720220436-658f7409f84d",
  },
  {
    id: 3,
    nombre: "Sucursal Sur",
    direccion: "Av. Sur 789, Zona Sur",
    telefono: "+56 9 3456 7890",
    imagen: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
  },
  {
    id: 4,
    nombre: "Sucursal Este",
    direccion: "Calle Este 101, Sector Este",
    telefono: "+56 9 4567 8901",
    imagen: "https://images.unsplash.com/photo-1521790362766-64d3a17c3b4e",
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
