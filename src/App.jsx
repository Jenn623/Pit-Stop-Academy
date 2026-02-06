import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
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
            {/* cuando la ruta sea "/F1Explanation" se renderiza la página WhatIs */}
            
          </Routes>
        </Layout>

      </BrowserRouter>
    </>
  )
}

export default App
