import './Categoria.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Categoria() {
    const [categorias, setCategorias] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const obtenerCategorias = async () => {
            try {
                const url = import.meta.env.VITE_THEMEALDB_API_KEY;
                if (!url) {
                    throw new Error('Falta la URL de categorias en el .env');
                }

                const response = await axios.get(url);
                const data = response.data && response.data.categories ? response.data.categories : [];
                setCategorias(data);
            } catch (err) {
                console.error('Error al obtener categorias:', err);
                setError('No se pudieron cargar las categorias.');
            } finally {
                setCargando(false);
            }
        };

        obtenerCategorias();
    }, []);

    if (cargando) return <p>Cargando categorias...</p>;

    if (error) {
        return (
            <div className="categorias">
                <p className="categorias-error">{error}</p>
            </div>
        );
    }

    return (
        <div className="categorias">
            <h1>Catalogo de Categorias</h1>
            {categorias && categorias.length > 0 ? (
                <div className="grilla-categorias">
                    {categorias.map((categoria) => (
                        <div key={categoria.idCategory} className="categoria-card">
                            <img
                                src={categoria.strCategoryThumb}
                                alt={categoria.strCategory}
                            />
                            <h3>{categoria.strCategory}</h3>
                            <p className="categoria-desc">
                                {categoria.strCategoryDescription}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No hay categorias disponibles</p>
            )}
        </div>
    );
}

export default Categoria;
