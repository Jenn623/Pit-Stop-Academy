import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import WhatIsF1 from './Pages/WhatIsF1.jsx'
import TeamsRacers from './Pages/Teams&Racers.jsx'
import WorldWideCircuits from './Pages/WorldWideCircuits.jsx'
import Glossary from './Pages/Glossary.jsx'
import TheLegends from './Pages/TheLegends.jsx'
import Layout from './Components/Layout.jsx'
import './App.css'

function App() {

  return (
    <>
      {/*BrowserRoute ayuda al manejo de la navegacion en las paginas */}
      <BrowserRouter>

        {/* se envuelven las rutas con el componente Layout anterior, actúa como la plantilla */}
        <Layout>
          {/* creamos un componente Routes, que actua como contenedor de cada ruta individual */}
          <Routes>
            {/*creamos una ruta individual por cada renderizado de página */}
            {/* cuando la ruta sea "/", se renderiza el paginado de Home */}
            <Route path='/' element={<Home/>}></Route>
            {/* cuando la ruta sea "/WhatIsF1" se renderiza la página WhatIsF1 */}
            <Route path='/WhatIsF1' element={<WhatIsF1/>} ></Route>
            {/* cuando la ruta sea "/Teams&Racers" se renderiza la página Teams&Racers*/}
            <Route path='/Teams&Racers' element={<TeamsRacers/>}></Route>
            {/* cuando la ruta sea "/WorldWideCircuits" se renderiza la página WorldWideCircuits */}
            <Route path='/WorldWideCircuits' element={<WorldWideCircuits/>}></Route>
            {/* cuando la ruta sea "/Glossary" se renderiza la página Glossary */}
            <Route path='/Glossary' element={<Glossary/>}></Route>
            {/* cuando la ruta sea "/TheLegends" se renderiza la página TheLegends */}
            <Route path='/TheLegends' element={<TheLegends/>}></Route>
          </Routes>
        </Layout>

      </BrowserRouter>
    </>
  )
}

export default App
