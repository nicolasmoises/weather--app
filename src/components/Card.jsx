import React from 'react';
import CardTemp from './CardTemp';
import propTypes from 'prop-types';
import s from './Card.module.css';
export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  function handleOnClose () {
    if(typeof onClose === 'function') onClose()
  }
  return (
    <div className= {s.card}> 
      <button className= {s.closeButton} onClick= {handleOnClose}>X</button>
      <span className={s.cityName}>{name}</span>
      <CardTemp label = 'Max' value= {max}/>
      <CardTemp label = 'Min' value= {min}/>
         <div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icono de clima" />
        </div>
      </div>
  )
}; 


Card.propTypes =  {
max: propTypes.number,
min: propTypes.number,
img: propTypes.string,
mame: propTypes.string,
onClose: propTypes.func,
};

/* <div>
        <label>Min</label>
        <span>{min}</span>
      </div>
      <div>
        <label>Max</label>
        <span>{max}</span> 
        <div> */