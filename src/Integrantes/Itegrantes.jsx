import '../Home/Home.css';

import { Footer } from '../Footer/footer';

export function Integrantes(){

    let integrantes = [
        {
            nombre:"Slow",
            instrumento:"Vocalista",
            edad:"36",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/cineepf.appspot.com/o/Slow.jpg?alt=media&token=a511f5d5-dc15-436e-904e-1e37b8018313"
        },
        {
            nombre:"Goyo",
            instrumento:"Vocalista",
            edad:"40",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/cineepf.appspot.com/o/goyo.jpg?alt=media&token=d6c4280e-9758-4af0-a5e8-f50f4cd252d6"
        },
        {
            nombre:"Tostao",
            instrumento:"Vocalista",
            edad:"41",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/cineepf.appspot.com/o/tostao.webp?alt=media&token=4813fb95-71e6-4d22-80db-96c4ce2a72c6"
        },
    ]

    return(
      
        <>
            <h1 className="title">Nuestros Integrantes</h1>
            <div className="row row-cols-1 row-cols-md-4 g-1 mt-3 border-0">
                {
                    integrantes.map(function(integrante){
                        return(
                            <>
                                <div className="col mt-3 p-5">
                                    <div className="card h-100 ">
                                        <h2 className="text-center fw-bold">{integrante.nombre}</h2>
                                        <img src={integrante.fotografia} alt="foto" className="img-fluid-w-100 h-100"/>
                                        <br/>
                                        <h4 className="text-center">Rol: {integrante.instrumento}</h4>
                                        <h6 className="text-center">Edad: {integrante.edad} años</h6>
                                    </div>
                                </div>
                                
                            </>
                        )
                    })
                }
            </div>
            <Footer></Footer>
        </>
    )
}