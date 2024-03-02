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
        { url: meme1, nombre: 'Tienes bellotas grandes niño', descripcion: 'galaxias' },
        { url: meme2, nombre: 'Pumba no enfrente de los niños', descripcion: 'pumba' },
        { url: meme3, nombre: 'no puedo hacerlo', descripcion: 'bob esponja no puedo hacerlo' },
        { url: meme4, nombre: 'no sabia que', descripcion: 'bob esponja calamardo' },
        { url: meme5, nombre: 'homero y march', descripcion: 'homero march' },
        { url: meme6, nombre: 'doctor llorando', descripcion: 'good doctor' },
        { url: meme7, nombre: 'homero', descripcion: 'homero' },
        { url: meme8, nombre: 'doctor strange', descripcion: 'doctor strange' },
        { url: meme9, nombre: 'ben 10', descripcion: 'ben 10' },
    ];

    const [imagenes, setImagenes] = useState(imagenesOriginales);
    const [busqueda, setBusqueda] = useState('');

    const handleBusqueda = (event) => {
        const valorBusqueda = event.target.value.toLowerCase();
        setBusqueda(valorBusqueda);

        // Filtrar las imágenes según el nombre
        const imagenesFiltradas = imagenesOriginales.filter((imagen) =>
            imagen.nombre.toLowerCase().includes(valorBusqueda)
        );

        setImagenes(imagenesFiltradas);
    };

    return (
        <>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <input
                    type="text"
                    placeholder="Buscar por nombre"
                    value={busqueda}
                    onChange={handleBusqueda}
                    style={{ width: '300px', padding: '5px' }}
                />
            </div>
            <RViewer imageUrls={imagenes.map(imagen => imagen.url)}>
                <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '40px', justifyContent: 'center' }}>
                    {imagenes.map((imagen, index) => (
                        <RViewerTrigger key={index} index={index}>
                            <div style={{ textAlign: 'center', margin: '10px', maxWidth: '150px' }}>
                                <img
                                    src={imagen.url}
                                    style={{ width: '150px', height: '150px', border: '2px solid black' }}
                                    alt={imagen.nombre}
                                />
                                <div>{imagen.nombre}</div>
                            </div>
                        </RViewerTrigger>
                    ))}
                </div>
            </RViewer>
        </>
    );
}
