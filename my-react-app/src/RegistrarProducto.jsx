import { useState, useEffect } from 'react';
import api from './Services/api';
import './registrarProducto.css';

function RegistrarProducto({productoEditado, limpiarSeleccion, onActualizacionExitosa}) {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [direccion, setDireccion] = useState('');
    const [stock, setStock] = useState('');
    const [id_categoria, setIdCategoria] = useState('');
    const [imagenes, setImagenes] = useState('');

    useEffect(() => {
        if (productoEditado) {
            setNombre(productoEditado.nombre);
            setPrecio(productoEditado.precio);
            setDireccion(productoEditado.direccion);
            setStock(productoEditado.stock);
            setIdCategoria(productoEditado.id_categoria);
            setImagenes(productoEditado.imagenes);
        } else {
            resetForm();
        }
    }, [productoEditado]);

    const resetForm = () => {
        setNombre('');
        setPrecio('');
        setDireccion('');
        setStock('');
        setIdCategoria('');
        setImagenes('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevoProducto = { 
            nombre, 
            precio: parseFloat(precio), 
            direccion, 
            stock: parseInt(stock), 
            id_categoria: parseInt(id_categoria),
            imagenes
        };
        try {
            if (productoEditado) {
                const response = await api.put(`/productos/${productoEditado.id}`, nuevoProducto);
                console.log('Producto actualizado:', response.data);
                alert('Producto actualizado exitosamente');
                limpiarSeleccion();
            } else {
                const response = await api.post('/productos', nuevoProducto);
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
                    <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="precio">Precio</label>
                        <input type="number" id="precio" step="0.01" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="direccion">Dirección</label>
                        <input type="text" id="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="stock">Stock</label>
                        <input type="number" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="id_categoria">ID Categoría</label>
                        <input type="number" id="id_categoria" value={id_categoria} onChange={(e) => setIdCategoria(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="imagenes">URL Imagen</label>
                        <input type="text" id="imagenes" value={imagenes} onChange={(e) => setImagenes(e.target.value)} required />
                </div>
                <button type="submit">{productoEditado ? 'Actualizar' : 'Registrar'}</button>
            </form>
        </div>
    )
}

export default RegistrarProducto;
