import './App.css';
import LogoFreeCamp from './imagenes/logo-freecampcode.png';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
import {useState} from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const incrementarNumero = () => {
    setNumClics (numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics (0);
  }

  return (
    <div className='App'>
      <div className='freecode-logo-contenedor'>
        <img
        className='freecode-logo'
        src={LogoFreeCamp}
        alt='freecodecamp logo'/>        
      </div>
      <div className='contenedor-principal'>
        <Contador numeroClics={numClics} />
        <Boton 
        texto = "Añadir" 
        esBotonDeClic={true}
        manejarClic = {incrementarNumero} />
        <Boton 
        texto = "Reiniciar" 
        esBotonDeClic={false}
        manejarClic = {reiniciarContador} />
      </div>

    </div>
  );
}

export default App;
