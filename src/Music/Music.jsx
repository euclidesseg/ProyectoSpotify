
import { serviciosCanciones } from '../services/serviciosCanciones.jsx';

import { Footer } from '../Footer/footer';

//necesito usar el hook USESDATE
//PARA ALMACENAR LA RESPUESTA DEL SERVICIO DE FORMA GLOBAL

import{ useState,useEffect } from 'react'

export function Music(){

//CREANDO MI PRIMER USESTATE

    const[getCanciones,setCanciones]=useState(null);
    const[getestamosCargando,setestamosCargando]=useState(true);

//USANDO MI PRIMER USEEFFECT
    useEffect(function(){

        serviciosCanciones()
        .then(function(respuesta){
        setCanciones(respuesta)
        setestamosCargando(false)
    })

    },[])

    if(getestamosCargando==true){
        return(
            <>
                 <h1 className='title'>ESTAMOS CARGANDO...</h1>
            </>
        )
    }else{
        return(
           
        <>
            <h1 className='title'>ESTAN LISTAS LAS CANCIONES</h1>
            <div className="row row-cols-1 row-cols-md-4 g-1 mt-3 border-0">
                        {
                            getCanciones.tracks.map(function(cancion){
                                console.log(getCanciones)
                                return(
                                <>
                                <div className="col mt-3 p-5">
                                    <div className="card h-100 ">
                                        <h5>{cancion.name}</h5>,
                                        <audio src={cancion.preview_url}
                                               controls className='w-100'>
                                        </audio>
                                        <img src={cancion.album.images[0].url} alt="foto" className='img-fluid-w-100 h-100' />
                                    </div>
                                </div>
                                </>
                                )
                            })
                        }
            </div>
        </>
            
        )
    }
    

   /* return(
        <>
            <h1 className='title'>ALGUNA DE NUESTRAS CANCIONES</h1>
            <Footer></Footer>
        </>
    )*/
}