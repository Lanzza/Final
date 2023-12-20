import React from "react";
import axios from 'axios'
import './Home.css'
import { useState, useEffect } from 'react'
import Footer from "../Footer/Footer";
//import Cambio from "../Cambio de Seccion/Cambio";

function Home() {

  //Variables

  const API_URL = 'https://api.themoviedb.org/3'
  const API_KEY = 'ffd145e57b429ec387f4b3a23bf1a777'
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original'
  

  //Variables / Maquinas de Estados

  const [movies, setMovies] = useState([])
  const [searchKey, setSearchKey] = useState("")
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({title: "Loading Movies"});
  const [playing, setPlaying] = useState(false);

  const fetchMovies = async(searchKey) => {
    const type = searchKey ? "search" : "discover"
    const {data: { results },
  } = await axios.get(`${API_URL}/${type}/movie`, {
    params: {
      api_key: API_KEY,
      query: searchKey,
      page:  1  // podemos cambiare el numero de pagina que renderizamos
    },
  });

  setMovies(results)
  setMovie(results[0])

  if(results.lenght) {
    await fetchMovie (results[0].id)
  }


  }


  const selectMovie = async(movie)=>{
    fetchMovie(movie.id)
    setMovie(movie)
    window.scroll(0,0)
  }
//Funcion para la peticion de una sola pelicula

  const fetchMovie = async(id)=>{

    const {data} = await axios.get(`${API_URL}/movie/${id}`,{
      params: {
        api_key: API_KEY,
        append_to_response: "videos"
      }
    })
    setMovie(data)
  }


  //Buscar
  const searchMovies= (e) => {
  e.preventDefault();
  fetchMovies(searchKey)


}
  useEffect(()=> {
    fetchMovies();
  }, [])
  


   
  return (
    <>
        

          <div className="VistaInicial">
          <h1 className="TituloWeb">Lanzza Movies</h1>

           {/* Buscador */}

           <form className="ContainerBusqueda" onSubmit={searchMovies} >
            <input className="InputBusqueda" type="text" placeholder="Nombre de la Pelicula" onChange={(e)=> setSearchKey(e.target.value)}/> 
            <button className="btn btn-primary">Buscar</button>
           </form>

          </div>
           <div>
       
         
            <div
              className="ViewInfo"
              style={{
                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
        
              }}
            >
                <div className="container">
                  <div className="CajaView">
                    <h1 className="text-white">{movie.title}</h1>
                    <p className="text-white">{movie.overview}</p>
                  </div>
                </div>
            
            </div>
          
       
            






              {/* Para Mostratrar las Peliculas */}


              <section>

                <h1 className="TituloPeliculas">Peliculas</h1>
              <div className="container ">

                <div className="row">
                   {movies.map((movie)=> (
                   <div key={movie.id} className="col-md-4 mb-3" onClick={() => selectMovie(movie)}>
                   <img src={`${URL_IMAGE + movie.poster_path}`} alt="" height={600} width="100%"/>
                   <h2 className="text-center">{movie.title}</h2>
                  </div>
            ))}
              </div>

              </div>
              </section>

      </div>
      
        


       

     
    </>
    
  )
}


export default Home
