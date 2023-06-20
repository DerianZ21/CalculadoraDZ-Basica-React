import './App.css';
import Boton from "./componentes/Boton.js"
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import Titulo from './componentes/Titulo';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const[input,setInput] = useState("");

  const agregarInput = val =>{
    setInput(input + val);
  };

  const clearInput = () =>{
    setInput("");
  };

  const calcular = () =>{

    var regex = /^[*/.]|\*{2,}|\/{2,}|\.{2,}|[*/.]$/;
    var regexNumeros = /\d+/;  

    if (!input) {
      alert("Por favor, agregar valores para realizar cálculos");
    } 

    else if (!regexNumeros.test(input)) {
      alert("Para realizar operaciones es importante escribir números");
    } 
    
    else if (regex.test(input)) {
      alert("La sintaxis de la operación es incorrecta, ingrese nuevamente la operación");
    } 
    else{
      setInput(evaluate(input).toString());
    }
    
  };

  return (
    <div className="App">
      <div className="cabecera">
        <Titulo input="CALCULADORA"></Titulo>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcular}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={clearInput}>Limpiar</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
