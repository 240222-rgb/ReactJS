import { useState, useEffect } from 'react';
import api from './Services/api';
import './RegistrarCategoria.css';

function RegistrarCategoria({ categoriaEditada, limpiarSeleccion, onActualizacionExitosa }) {
    const [nombre, setNombre] = useState('');

    useEffect(() => {
        if (categoriaEditada) {
            setNombre(categoriaEditada.nombre);
        } else {
            resetForm();
        }
    }, [categoriaEditada]);

    const resetForm = () => {
        setNombre('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevaCategoria = { 
            nombre
        };
        try {
            if (categoriaEditada) {
                const response = await api.put(`/categorias/${categoriaEditada.id}`, nuevaCategoria);
                console.log('Categoría actualizada:', response.data);
                alert('Categoría actualizada exitosamente');
                limpiarSeleccion(null);
            } else {
                const response = await api.post('/categorias', nuevaCategoria);
                console.log('Categoría registrada:', response.data);
                alert('Categoría registrada con éxito');
                resetForm();
            }
            if (onActualizacionExitosa) onActualizacionExitosa();
        } catch (error) {
            console.error('Error al registrar:', error);
            alert('Error al procesar la solicitud');
        }
    };

    return (
        <div className="registrar-container">
            <h2>Registrar Categoría</h2>
            <form onSubmit={handleSubmit} className="registrar-form">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        type="text" 
                        id="nombre" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">{categoriaEditada ? 'Actualizar' : 'Registrar'}</button>
            </form>
        </div>
    );
}

export default RegistrarCategoria;
