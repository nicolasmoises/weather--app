import React from 'react';
import CardTemp from './CardTemp';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  function handleOnClose () {
    if(typeof onClose === 'function') onClose()
  }
  return (
    <div> 
      <button onClick= {handleOnClose}>X</button>
      <span>{name}</span>
      <CardTemp label = 'Max' value= {max}/>
      <CardTemp label = 'Min' value= {min}/>
         <div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icono de clima" />
        </div>
      </div>
  )
}; 

{/* <div>
        <label>Min</label>
        <span>{min}</span>
      </div>
      <div>
        <label>Max</label>
        <span>{max}</span> 
        <div> */}