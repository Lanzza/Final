import React from "react";
import {BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
//import Contratar from "../Contratar/Contratar";
// import About from "../About/About"
import Home from "../Home/Home"
import './Cambio.css'

const Cambio = () =>{
//React router (Biblotecas para el enrutamiento)
//Proporciona herramientas que me va a permitir definir las rutas a los componentes asociados

    return (
        <>
     <BrowserRouter>

<header>
   <nav>

        {/* <NavLink to='/' className='link'>INICIO</NavLink>  */}
      {/* <NavLink to='about'  className='link'>ABOUT</NavLink>    si le agregamos target = "_blank" podemos hacer que se habra en otra pestaña la pagina en el navegador */}
      
      
       
   </nav>
</header>

<Routes>
  {/* <Route  index element={<Home/>} />  */}
   {/* <Route  path='about' element={<About/>} /> */}
   {/* <Route path='contratar' element={<Contratar/>} /> */}
   
</Routes>

</BrowserRouter>
           
        </>
    )
}

export default  Cambio