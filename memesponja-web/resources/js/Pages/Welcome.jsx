import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/react';
import { RViewerTrigger, RViewer } from 'react-viewerjs';
import meme1 from '../../img/meme1.jpg';
import meme2 from '../../img/meme2.png';
import meme3 from '../../img/meme3.jpg';
import meme4 from '../../img/meme4.jpg';
import meme5 from '../../img/meme5.jpg';
import meme6 from '../../img/meme6.jpg';
import meme7 from '../../img/meme7.jpg';
import meme8 from '../../img/meme8.jpg';
import meme9 from '../../img/meme9.jpg';

export default function Welcome({ }) {
    const imagenesOriginales = [
        { url: meme1, nombre: 'Nombre1', descripcion: 'galaxias' },
        { url: meme2, nombre: 'Nombre2', descripcion: 'pumba' },
        { url: meme3, nombre: 'Nombre3', descripcion: 'bob esponja no puedo hacerlo' },
        { url: meme4, nombre: 'Nombre4', descripcion: 'bob esponja calamardo' },
        { url: meme5, nombre: 'Nombre5', descripcion: 'homero march' },
        { url: meme6, nombre: 'Nombre6', descripcion: 'good doctor' },
        { url: meme7, nombre: 'Nombre7', descripcion: 'homero' },
        { url: meme8, nombre: 'Nombre8', descripcion: 'doctor strange' },
        { url: meme9, nombre: 'Nombre9', descripcion: 'ben 10' },
    ];

    const [imagenes, setImagenes] = useState(imagenesOriginales);
    const [busqueda, setBusqueda] = useState('');

    const handleBusqueda = (event) => {
        const valorBusqueda = event.target.value.toLowerCase();
        setBusqueda(valorBusqueda);

        // Filtrar las imágenes según la descripción
        const imagenesFiltradas = imagenesOriginales.filter((imagen) =>
            imagen.descripcion.toLowerCase().includes(valorBusqueda)
        );

        setImagenes(imagenesFiltradas);
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Buscar por descripción"
                    value={busqueda}
                    onChange={handleBusqueda}
                />
            </div>
            <RViewer imageUrls={imagenes.map(imagen => imagen.url)}>
                <div style={{ display: 'flex', marginTop: '40px' }}>
                    {imagenes.map((imagen, index) => (
                        <RViewerTrigger key={index} index={index}>
                            <img
                                src={imagen.url}
                                style={{ width: '150px', height: '150px', marginLeft: '20px', border: '2px solid black' }}
                            />
                        </RViewerTrigger>
                    ))}
                </div>
            </RViewer>
        </>
    );
}
