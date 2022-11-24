import { Link } from "react-router-dom";
import '../Home/Home.css';

export function Menu(){

    return(
        <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand texto" to="/">CHOC QUIB TOWN</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ">
                    <li className="nav-item">
                    <Link className="nav-link active texto" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link texto" to="/historia">Historias</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link texto" to="/integrantes">Integrantes</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link texto" to="/music">Musica</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav> 
        </>
    )
}