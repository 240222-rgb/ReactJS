import "./Galeria.css";

const galerias = [
  {
    id: 1,
    titulo: "Concierto en vivo",
    imagen: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
  },
  {
    id: 2,
    titulo: "Estudio de grabación",
    imagen: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
  },
  {
    id: 3,
    titulo: "Banda en acción",
    imagen: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    id: 4,
    titulo: "Teclado y sintetizadores",
    imagen: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
  },
  {
    id: 5,
    titulo: "Ensayo acústico",
    imagen: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  },
  {
    id: 6,
    titulo: "Guitarra eléctrica close-up",
    imagen: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
  },
];

function Galeria() {
  return (
    <div className="galeria-container">
      <h2 className="galeria-titulo">Nuestra Galería Musical</h2>
      <p className="galeria-descripcion">
        Imágenes de conciertos, estudios y nuestros instrumentos en acción.
      </p>

      <div className="galeria-grid">
        {galerias.map((item) => (
          <div className="galeria-card" key={item.id}>
            <img src={item.imagen} alt={item.titulo} loading="lazy" />
            <h3>{item.titulo}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;
