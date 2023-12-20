import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  Header  from './componentes/Header/Header.jsx'
import Cambio from './componentes/Cambio de Seccion/Cambio'
import Footer from './componentes/Footer/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header/>
    <Footer/>
    
  </React.StrictMode>,
)
