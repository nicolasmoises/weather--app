import React from 'react';
import Card from './Card';
import s from './Cards.module.css';
export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return (
  <div className={s.cards}>
    {cities.map((city) => <Card min={city.main.temp_min} max= {city.main.temp_max} img = {city.weather[0].icon} name= {city.name} onClose={()=> alert(city.name)} key={city.id}/>)}
  </div>
    )
};