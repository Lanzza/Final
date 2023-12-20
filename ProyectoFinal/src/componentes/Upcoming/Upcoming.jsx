//import React, { useRef, useState} from 'react';
import { useState, useEffect } from 'react'
import './Upcoming.css'
import Footer from '../Footer/Footer'



function Upcoming() {

    const [populares, setPopulares]  = useState ([])
    
    
 
    // llamado a la api
    useEffect(()=> {
     fetch ('https://api.themoviedb.org/3/movie/upcoming?api_key=ffd145e57b429ec387f4b3a23bf1a777&language=es-ES')
     .then (respuesta => respuesta.json())
     .then (data => {
      setPopulares(data.results)
      console.log(data.results)
     } )
 
    }, []) // se ejecuta una sola vez por cada render debido a que no tiene dependencia
 
  
 
 
   
    
   return (
     <>
    

    <div className='populares'>PROXIMAMENTE</div>

       <section className='section'>
         <ul>
         {populares.map(movie => (
           <li> 
             <h1 className='nombrePopular'>{movie.title}</h1>
             <img className='imagenPopular' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
           {/* <img src={personaje.image} alt="" /> */}
         
           </li>
           
         ))
         }
         </ul>
       </section>
 
       
     </>
   )
 }
 
 
 export default Upcoming