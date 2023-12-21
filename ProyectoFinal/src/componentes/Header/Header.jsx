import React from "react";
import {BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Contratar from "../Contratar/Contratar";
// import About from "../About/About"
import Home from "../Home/Home";
import Popular from "../Popular/Popular";
import './Header.css'
import Upcoming from "../Upcoming/Upcoming";
import Logo from "../assets/logo.png"
import Logo2 from "../assets/Logo 2.png"
import Logo3 from "../assets/Logo3.png"
import LanzzaSeries from "../LanzzaSeries/LanzzaSeries";

const Header = () =>{
//React router (Biblotecas para el enrutamiento)
//Proporciona herramientas que me va a permitir definir las rutas a los componentes asociados

    return (
        <>


            <BrowserRouter>

             <header>
                <nav>

                    <img className="Logo" src={Logo3} alt="" />

                    <NavLink to='/' className='link'>INICIO</NavLink>
                    <NavLink to='popular' className='link'>POPULARES</NavLink>
                    <NavLink to='upcoming' className='link'>PROXIMAMENTE</NavLink>
                   {/* <NavLink to='about'  className='link'>ABOUT</NavLink>    si le agregamos target = "_blank" podemos hacer que se habra en otra pestaña la pagina en el navegador */}
                   <NavLink to='contratar'  className='link'>SUSCRIBIRSE</NavLink> {/*si le agregamos target = "_blank" podemos hacer que se habra en otra pestaña la pagina en el navegador*/}
                   <NavLink to='series' className='linkSeries'>SERIES</NavLink>
                  

                    
                </nav>
             </header>
             <div className="ColorBar"></div>
            
            <Routes>
                <Route  index element={<Home/>} />
                {/* <Route  path='about' element={<About/>} /> */}
                <Route path='popular' element={<Popular/>} />
                <Route path='upcoming' element={<Upcoming/>} />
                <Route path='contratar' element={<Contratar/>} />
                <Route path='series' element={<LanzzaSeries/>}/>
            </Routes>
            
            </BrowserRouter>
        </>
    )
}

export default  Header 