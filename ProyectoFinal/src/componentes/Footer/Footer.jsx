import React, { useRef, useState} from 'react';
import './Footer.css'
import Popular from "../Popular/Popular"
import Foto from "../assets/Foto.jpg"
import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import JS from "../assets/js.png"
import REACT from "../assets/React.png"
import C from "../assets/c.png"





const Footer = () =>{

    
  

    
    return (
        <>

        <div className="Linea2"></div>

        <section className='Footer'>

            <h1 className='TituloFooter'>Proyecto Realizado por:</h1>

         
            <div className='CajaFooter'>
            <div>
                <div className="CajaFoto"><img className='Foto' src={Foto} alt="" /></div>
                <h3 className='MiNombre'>Diego Lanzzavechia</h3>
            </div>
            <div>
            <h3 className='Estudiante'>Estudiante de:</h3>
                <ul>
                    <li className="li">Full Stack Developer "(UTN)" </li>
                    <li className="li2">Diseño y Programacion de VideosJuegos "(Da Vinci)"</li>
                </ul>
            </div>
            <div>
                <h3 className="Tecnologias">Tecnologias</h3>
                <div className='CajaLogos'>
                    <div className="logos"><img src={HTML} alt="" /></div>
                    <div className="logos"><img src={CSS} alt="" /></div>
                    <div className="logos"><img src={JS} alt="" /></div>
                    <div className="logos"><img src={REACT} alt="" /></div>
                    <div className="logos2"><img src={C} alt="" /></div>
                </div>
            </div>
            </div>
           

        </section>
        <div className="Linea2"></div>
     

        </>
    )
}

export default  Footer