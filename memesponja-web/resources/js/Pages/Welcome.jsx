import { Link, Head } from '@inertiajs/react';
import {RViewerTrigger, RViewer} from 'react-viewerjs';
import meme1 from '../../img/meme1.jpg';
import meme2 from '../../img/meme2.png';
import meme3 from '../../img/meme3.jpg';

export default function Welcome({}) {
    let imagenes = [
        meme1,
        meme2,
        meme3,
    ];

    return (
        <>
            <RViewer imageUrls = {imagenes}>
                <div style={{display:'flex',marginTop:'40px'}}>
                    {imagenes.map((imagen,index)=>{
                        return(
                            <RViewerTrigger key={index} index={index}>
                                <img src={imagen} style={{width:'150px', height:'150px', marginLeft:'20px', border:'2px solid black'}}/>
                            </RViewerTrigger>
                        )
                    })}
                </div>
            </RViewer>
        </>
    );
}
