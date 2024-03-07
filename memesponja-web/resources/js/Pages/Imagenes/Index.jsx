// resources/js/Pages/Imagenes/Index.jsx
import React from 'react';

const Index = ({ imagenes }) => {
    return (
        <div>
            <h1>Listado de Imágenes</h1>
            <ul>
                {imagenes.map((imagen) => (
                    <li key={imagen.id}>{imagen.imagen}</li>
                ))}
            </ul>
        </div>
    );
};

export default Index; // Asegúrate de exportar el componente correctamente