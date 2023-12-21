import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import './Contratar.css'

const Contact = () =>{

    const form = useRef();      //Es un metodo que crea una referencia para poder acceder al dom desde un elemento funcional //Es un HOOK
    const [mensaje, SetMensaje] = useState (false) //El estado inicial de mensaje es False






    const sendEmail = (e) => {
      e.preventDefault();           //Previene que se recargue la web!!
  
      emailjs.sendForm('service_9r5xsgh', 'template_4jjkamf', form.current, 'xFf7nyRP8W-O4DGLt') //Vinculacion de Emailjs con mi React
        .then((result) => {
            console.log(result.text);
            form.current.reset(); //Reset es el metodo que resetea
            SetMensaje(true);
        }, (error) => {
            console.log(error.text);
        });
    };

  

    
    return (
        <>
        <h1 className='PlanesTitulo'>PLANES</h1>
        <div className="planes">
            
            <div className='planPlata' >
            <h3 className='TituloPlan' >Plan Plata</h3>
            <p className='DescripcionPlan'>Este es el plan Inicial, que te permitira ver cualquier pelicula desde cualquier lugar, solo para un dispositivo.  </p>
            <h5 className='PrecioPlan'>$2,99 al mes </h5>
            </div>

            <div  className='planOro'>
            <h3 className='TituloPlan'>Plan Oro</h3>
            <p className='DescripcionPlan'>Este es el plan Intermedio, ideal para compartir con tu pareja, un amigo o algun familiar. Podras acceder a cualquier titulo disponible en 2 dispositivo a la vez!!</p>
            <h5 className='PrecioPlan'>$4,99 al mes</h5>
            </div>

            <div  className='planDiamante'>
            <h3 className='TituloPlan' >Plan Diamante</h3>
            <p className='DescripcionPlan'>Este es el mejor plan, el plan Diamante que te permitira a vos y a toda tu familia acceder a cualquier pelicula desde cualquier parte, hasta cuando no tienes internet. Debido a que este plan te permitira descagar peliculas y tenerlas en tu dispositivo por hasta 7 dias! Ademas, no deberas preocuparte por quiene sta viendo ahora, ya que pueden estar conectados 10 dispositivos en simultaneo!! Genial Verdad</p>
            <h5 className='PrecioPlan'>$9,99 al mes</h5>
            </div>
        </div>
        <section>
       
        <h2 className='Contratar'>CONTRATAR</h2>
      

            <form ref={form} onSubmit={sendEmail}>      {/*Con el form le paso el useRef*/}  {/*onSubmit es  un evento, para enviar, le tengo que pasar la funcion SendEmail*/}
                <label  className='nombre'>Nobre</label>
                <input className='name' type="text" name="user_name" />

                <label  className='nombre'>Apellido</label>
                <input className='name' type="text" name="user_apellido" />

                <label  className='emailName' >Email</label>
                <input className='email' type="email" name="user_email" />
                
                <label  className='nombre'>Plan</label>
                <input  className='plan' type="select" />
              
                
                
                
                
                <label className='messageName'>Message</label>  
                <textarea className='message' name="user_message" />
                <input className='boton' type="submit" value="Send" />
                {mensaje && <h1 className='seEnvio'>Se ha enviado con Exito!!</h1>}
            </form>


        </section>
     

        </>
    )
}

export default  Contact