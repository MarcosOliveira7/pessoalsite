import React from "react";
import './App.css';

import BarraNavegacao from "./componentes/BarraNavegacao/BarraNavegacao"
import Cabecalho from './componentes/cabecalho/Cabecalho';
import Rodape from './componentes/rodape/Rodape';

import Curriculo from "./componentes/curriculo/Curriculo";
import Portfolio from "./componentes/portfolio/Portfolio";
import Contato from "./componentes/contato/Contato";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  return (

    <>

      <Cabecalho> </Cabecalho>


    
      <BrowserRouter> 

       <BarraNavegacao></BarraNavegacao>


        <Routes> 
          <Route index element = {<Curriculo />} />
          <Route path= "portfolio" element={<Portfolio />} />
          <Route path= "contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>


      <Rodape></Rodape>

    </>
  )
}

export default App;
