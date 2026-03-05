import { useState, useEffect } from 'react';
import api from './Services/api';
import './registrarProducto.css';

function RegistrarProducto({productoEditado, limpiarSeleccion, onActualizacionExitosa}) {
    const [titulo, setTitulo] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        if (productoEditado) {
            setTitulo(productoEditado.title);
            setPrice(productoEditado.price);
            setDescription(productoEditado.description);
            setCategory(productoEditado.category);
            setImage(productoEditado.image);
        } else {
            resetForm();
        }
    }, [productoEditado]);

    const resetForm = () => {
        setTitulo('');
        setPrice('');
        setDescription('');
        setCategory('');
        setImage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevoProducto = { 
            title: titulo, 
            price: parseFloat(price), 
            description, 
            category, 
            image 
        };
        try {
            if (productoEditado) {
                const response = await api.put(`/products/${productoEditado.id}`, nuevoProducto);
                console.log('Producto actualizado:', response.data);
                alert('Producto actualizado exitosamente');
                limpiarSeleccion();
            } else {
                const response = await api.post('/products', nuevoProducto);
                console.log('Producto registrado:', response.data);
                alert('Producto registrado con éxito');
                resetForm();
            }
            if (onActualizacionExitosa) onActualizacionExitosa();
        } catch (error) {
            console.error('Error al registrar:', error);
            alert('Error al procesar la solicitud');
        }
    };

    return(
        <div className="registrar-container">
            <h2>Registrar Productos</h2>
                <form onSubmit={handleSubmit} className="registrar-form">
                <div className="form-group">
                    <label htmlFor="titulo">Título</label>
                        <input type="text" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Precio</label>
                        <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descripción</label>
                        <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Categoría</label>
                        <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="imagen">Imagen</label>
                        <input type="text" id="imagen" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>
                <button type="submit">{productoEditado ? 'Actualizar' : 'Registrar'}</button>
            </form>
        </div>
    )
}

export default RegistrarProducto;
