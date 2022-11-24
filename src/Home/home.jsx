
import './Home.css'

import { Footer } from '../Footer/footer';

export function Home(){

    let Conciertos = [
        {
            ciudad:"Bogota - Colombia",
            nombre: "Concierto por la vida",
            imagen: "https://firebasestorage.googleapis.com/v0/b/cineepf.appspot.com/o/BANDA.jpeg?alt=media&token=67805b1f-7dd6-4d31-8f2f-578174aae154",
            fecha: 2012
        },
        {
            ciudad:"Cali - Valle del Cauca",
            nombre: "Concierto Riopaila",
            imagen: "https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/Concierto2.jpg?alt=media&token=6061e395-4f8e-43ff-9218-e55858270de0",
            fecha: 2013
        },
        {
            ciudad:"Pereira - Risaralda",
            nombre: "Concierto del Café",
            imagen: "https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/Concierto3.jpg?alt=media&token=f9d68fcd-9c2b-40bc-b5dd-047fd59355a9",
            fecha: 2016
        }
    ]

    return(
        <>
        
            <img src="https://firebasestorage.googleapis.com/v0/b/cineepf.appspot.com/o/BANDA.jpeg?alt=media&token=67805b1f-7dd6-4d31-8f2f-578174aae154" alt="banner" className="w-100 img-fluid"/>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className='title'>CHOC QUIB TOWN</h1>
                            <p>
                            ChocQuibTown (a veces escrito como Choc Quib Town ) es un grupo colombiano de hip-hop que fusiona varios géneros musicales. Aunque la banda se formó en Cali , los integrantes son originarios del departamento colombiano del Chocó . El grupo está formado por Carlos "Tostao" Valencia (rape), Gloria "Goyo" Martínez (canto y rap) y Miguel "Slow" Martínez (producción y rap). La música de la banda se inspira en una amplia variedad de géneros modernos, incluidos el hip-hop y, más recientemente, la electrónica, combinados con géneros tradicionales colombianos, como la salsa, el jazz latino y los ritmos afrolatinos.
                            </p>
                            <hr/>

                        </div>
                    </div>

                        <div className="row">
                            <div className="col-12 col-md-8">
                                <img src="https://firebasestorage.googleapis.com/v0/b/cineepf.appspot.com/o/CHOC.jpg?alt=media&token=ee0fbb5a-6646-4ed1-a82e-e09fd0aae224" className="w-100 img-fluid" alt="" />
                            </div>
                            <div className="col-12 col-md-4 align-self-center">
                                <h1 className="title">HISTORIA</h1>
                                <p>
                                Nació en Quibdó, Chocó, el 5 de marzo de 1981, y ya desde los ocho años comenzó a dar sus pasos en la música a través de la percusión. Trabajó en proyectos musicales nacionales como Iroko, Carbono, Mensajeros, Mojarra Eléctrica, Buena Vibra Sound System y otros de música jazz.
                                </p>
                            </div>
                            <hr/>
                        </div>
                </div>
                <Footer></Footer>
            </section>
            
        </>
    )
}

