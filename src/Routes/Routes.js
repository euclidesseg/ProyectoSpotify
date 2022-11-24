import {Home} from '../Home/home.jsx';
import { Historia } from '../Historia/Historia.jsx';
import {Integrantes} from '../Integrantes/Itegrantes.jsx';
import {Music} from '../Music/Music.jsx'

import { Menu } from '../Menu/Menu.jsx';


import { Routes, Route } from "react-router-dom";


export function Rutas(){
    return(
        <div className="App">
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="historia" element={<Historia />} />
          <Route path="integrantes" element={<Integrantes />} /> 
          <Route path="music" element={<Music />} />
        </Routes>
      </div>
    )
}