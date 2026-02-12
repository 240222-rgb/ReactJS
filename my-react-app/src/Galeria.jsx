import "./Galeria.css";

const galerias = [
  {
    id: 1,
    titulo: "Concierto en vivo",
    imagen: "https://cdn.milenio.com/uploads/media/2022/05/07/coliseo-centenario-volvio-sucursal-manicomio.JPG",
  },
  {
    id: 2,
    titulo: "Estudio de grabación",
    imagen: "https://objetos-xlk.estaticos-marca.com/uploads/2025/03/21/16735162625883.jpeg",
  },
  {
    id: 3,
    titulo: "Banda en acción",
    imagen: "https://imagenes.elpais.com/resizer/v2/UJ6QVAB2XNCUNETEU2TLYMFKDE.jpg?auth=2ac07f8f14a7f0fefe5d0cb60aa3e64a8a9938ee87dc83352b0e8daa5f86c17f&width=414",
  },
  {
    id: 4,
    titulo: "Teclado y sintetizadores",
    imagen: "https://cdn.korg.com/es/news/upload/572bc85e450281c16131b4a107fda2a9.jpg",
  },
  {
    id: 5,
    titulo: "Ensayo acústico",
    imagen: "https://manualguitarraelectrica.com/wp-content/uploads/2023/08/Guitarra-Clasica-Espanola.jpg.webp",
  },
  {
    id: 6,
    titulo: "Guitarra eléctrica close-up",
    imagen: "https://www.txirula.com/modules/dbblog/views/img/post/Choosing-the-Best-Guitar-Body-Style-Featured-Image.jpg",
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
