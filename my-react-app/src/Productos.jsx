import "./Productos.css";

const productos = [
  {
    id: 1,
    nombre: "Guitarra Acústica",
    descripcion: "Ideal para principiantes y músicos intermedios.",
    precio: "$1200.000",
    imagen: "https://gamamusic.com/cdn/shop/files/C4002-01.jpg?v=1690314520&width=1000",
  },
  {
    id: 2,
    nombre: "Guitarra Eléctrica",
    descripcion: "Sonido potente para rock y blues.",
    precio: "$2500.000",
    imagen: "https://alamomusical.com/wp-content/uploads/2021/12/1-53.png",
  },
  {
    id: 3,
    nombre: "Teclado Musical",
    descripcion: "61 teclas, múltiples sonidos y ritmos.",
    precio: "$5000.000",
    imagen: "https://www.mialegria.com.mx/cdn/shop/files/2440_05.jpg?v=1752260254",
  },
  {
    id: 4,
    nombre: "Batería Acústica",
    descripcion: "Set completo para ensayos y escenarios.",
    precio: "$4500.000",
    imagen: "https://www.musicalesdoris.com/cdn/shop/files/99a06ea8b9a144c859fa30cc01359405-bateria-acust-yamaha-rydeen-gloss-pale-blue-catril-plat-rdp2f5gpuset_1280x.jpg?v=1718147519",
  },
  {
    id: 5,
    nombre: "Bajo Eléctrico",
    descripcion: "Base rítmica perfecta para cualquier banda.",
    precio: "$2200.000",
    imagen: "https://therocklab.mx/cdn/shop/files/EBG3EBCH1_1080x.jpg?v=1734726623",
  },
  {
    id: 6,
    nombre: "Violín",
    descripcion: "Sonido clásico con excelente proyección.",
    precio: "$1600.000",
    imagen: "https://m.media-amazon.com/images/I/71Kxqh0AisL.jpg",
  },
  {
    id: 7,
    nombre: "Saxofón",
    descripcion: "Ideal para jazz, funk y música moderna.",
    precio: "$3900.000",
    imagen: "https://www.falymusic.com/images/detailed/83/2Sax_alto_Symphonic_negro_c_dorado_Tone_EB_Key_High_F__1__11zon.jpg",
  },
  {
    id: 8,
    nombre: "Micrófono Profesional",
    descripcion: "Calidad de estudio para voces e instrumentos.",
    precio: "$950.000",
    imagen: "https://www.mitzu.com/media/catalog/product/cache/3a94417c1c7207942d4c5b6a69335a23/image/2233789b/microfono-unidireccional-condensador-con-filtro-anti-pop-negro.jpg",
  },
];

function Productos() {
  return (
    <div className="productos-container">
      <h2 className="productos-titulo">Nuestros Instrumentos Musicales</h2>
      <p className="productos-descripcion">
        Descubrí nuestra selección de instrumentos y accesorios de alta calidad.
      </p>

      <div className="productos-grid">
        {productos.map((producto) => (
          <div className="producto-card" key={producto.id}>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              loading="lazy"
            />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <span>{producto.precio}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
