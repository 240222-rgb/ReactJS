import './Categoria.css';
import { useEffect, useState } from 'react';
import api from './Services/api';
import RegistrarCategoria from './RegistrarCategoria';

function Categoria({ puedeEditar = false }) {
    const [categorias, setCategorias] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

    const obtenerCategorias = async () => {
        try {
            const response = await api.get('/categorias');
            setCategorias(response.data);
        } catch (error) {
            console.error('Error al obtener categorias:', error);
        } finally {
            setCargando(false);
        }
    };

    const handleEliminar = async (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar esta categoría?')) {
            try {
                await api.delete(`/categorias/${id}`);
                alert('Categoría eliminada exitosamente');
                obtenerCategorias();
            } catch (error) {
                console.error('Error al eliminar categoría:', error);
                alert('Error al eliminar la categoría');
            }
        }
    };

    useEffect(() => {
        obtenerCategorias();
    }, []);

    if (cargando) return <p>Cargando categorias...</p>;

    return (
        <div className="categorias">
            {puedeEditar ? (
                <RegistrarCategoria 
                    categoriaEditada={categoriaSeleccionada}
                    limpiarSeleccion={setCategoriaSeleccionada}
                    onActualizacionExitosa={obtenerCategorias}
                ></RegistrarCategoria>
            ) : null}
            <h1>Catálogo de Categorías</h1>
            {categorias && categorias.length > 0 ? (
                <div className="grilla-categorias">
                    {categorias.map((categoria) => (
                        <div key={categoria.id} className="categoria-card">
                            <h3>{categoria.nombre}</h3>
                            {puedeEditar ? (
                                <div className="categoria-actions">
                                    <button className="btn-edit" onClick={() => setCategoriaSeleccionada(categoria)}>Editar</button>
                                    <button className="btn-delete" onClick={() => handleEliminar(categoria.id)}>Eliminar</button>
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>
            ) : (
                <p>No hay categorías disponibles</p>
            )}
        </div>
    );
}

export default Categoria;
