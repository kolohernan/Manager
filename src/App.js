import './style.css';
import { Fragment } from 'react';
import C_navbar from "./Components/navbar";
import C_Saludo from './Components/Saludo';
import C_comentario from './Components/comentarios';

function App() {

  const sujeto = {
      nombre: 'Hernan',
      urlImagen: './logo.png',
      texto: "este es el texto que se muestra"
  } 
  return (
    <Fragment>
      <C_navbar/>
      <div className='bg-primary'>
        {/*Llamo a los componentes y les paso los prompts*/}
        <C_Saludo persona="Juanito"/>
        <C_comentario p_sujeto={sujeto}/>
      </div>
    </Fragment>
  );
}

export default App;
