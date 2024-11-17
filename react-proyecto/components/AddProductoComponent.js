import React, { useState, useEffect } from 'react';
import ProductoService from '../services/ProductoService';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

export const AddProductoComponent = () => {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [cantidadStock, setCantidadStock] = useState('');
    const [categoria, setCategoria] = useState('');
    const [fechaCreacion, setFechaCreacion] = useState('');
    const [estado, setEstado] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateProducto = (e) => {
        e.preventDefault();

        const producto = { nombre, descripcion, precio, cantidadStock, categoria, fechaCreacion, estado };

        if (id) {
            ProductoService.updateProducto(id, producto)
                .then((response) => {
                    console.log('Producto actualizado:', producto);
                    navigate('/productos');
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            ProductoService.createProducto(producto)
                .then((response) => {
                    console.log('Producto creado:', producto);
                    navigate('/productos');
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    useEffect(() => {
        if (id) {
            ProductoService.getProductoById(id)
                .then((response) => {
                    setNombre(response.data.nombre);
                    setDescripcion(response.data.descripcion);
                    setPrecio(response.data.precio);
                    setCantidadStock(response.data.cantidadStock);
                    setCategoria(response.data.categoria);
                    setFechaCreacion(response.data.fechaCreacion);
                    setEstado(response.data.estado);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [id]);

    const titulo = () => {
        return id ? <h2 className="text-center">Actualizar Producto</h2> : <h2 className="text-center">Registrar Producto</h2>;
    };

    return (
        <div>
            <div className="container" style={{ marginTop: '80px' }}>
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {titulo()}
                        <div className="card-body">
                            <form onSubmit={saveOrUpdateProducto}>
                                <div className="form-group mb-2">
                                    <label className="form-label">Nombre:</label>
                                    <input
                                        type="text"
                                        placeholder="Escriba el nombre del producto"
                                        name="nombre"
                                        className="form-control"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Descripción:</label>
                                    <input
                                        type="text"
                                        placeholder="Escriba la descripción del producto"
                                        name="descripcion"
                                        className="form-control"
                                        value={descripcion}
                                        onChange={(e) => setDescripcion(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Precio:</label>
                                    <input
                                        type="number"
                                        placeholder="Escriba el precio del producto"
                                        name="precio"
                                        className="form-control"
                                        value={precio}
                                        onChange={(e) => setPrecio(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Cantidad/Stock:</label>
                                    <input
                                        type="number"
                                        placeholder="Escriba la cantidad de stock del producto"
                                        name="cantidadStock"
                                        className="form-control"
                                        value={cantidadStock}
                                        onChange={(e) => setCantidadStock(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Categoría:</label>
                                    <input
                                        type="text"
                                        placeholder="Escriba la categoría del producto"
                                        name="categoria"
                                        className="form-control"
                                        value={categoria}
                                        onChange={(e) => setCategoria(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Fecha de Creación:</label>
                                    <input
                                        type="date"
                                        name="fechaCreacion"
                                        className="form-control"
                                        value={fechaCreacion}
                                        onChange={(e) => setFechaCreacion(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Estado:</label>
                                    <select
                                        name="estado"
                                        className="form-control"
                                        value={estado}
                                        onChange={(e) => setEstado(e.target.value)}
                                    >
                                        <option value="">Seleccione el estado</option>
                                        <option value="Activo">Activo</option>
                                        <option value="Inactivo">Inactivo</option>
                                    </select>
                                </div>

                                <div className="botones mt-3">
                                    <button type="submit" className="btn btn-danger">Guardar</button>
                                    <Link to="/productos" className="btn btn-primary" style={{ marginLeft: '10px' }}>Cancelar</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductoComponent;
