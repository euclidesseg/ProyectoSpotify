import './footer.css'
export function Footer(){

    return(
        <>

        <div className="container-fluid bg-dark g-0 p-5  
        mt-5 ">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                    <img src="https://firebasestorage.googleapis.com/v0/b/cineepf.appspot.com/o/descarga.png?alt=media&token=cbcd2475-b974-4f1e-b40b-5f36e9d4dee7" className="w-100 h-75 img-fluid footer-img" alt="logo"/>
                </div>
            </div>
            <div className="row justify-content-center mt-3">
                <div className="col-12 col-md-8 text-center">
                    <i class="bi bi-instagram text-white mx-2 fs-2"></i>
                    <i class="bi bi-facebook text-white mx-2 fs-2"></i>
                    <i class="bi bi-tiktok text-white mx-2 fs-2"></i>
                </div>
            </div>
        </div>

    </>
    )
    
}