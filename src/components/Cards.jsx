import React from 'react';
import Card from './Card';
import s from './Cards.module.css';
export default function Cards({cities, onRemove}) {
  // acá va tu código
  // tip, podés usar un map
  return (
  <div className={s.cards}>
    {cities.map((city) => <Card 
    key={city.id}
    min={city.min} 
    max= {city.max}
     img = {city.img} 
     name= {city.name} 
     onClose={() => onRemove(city.id)}
      />
      )}
  </div>
    )
};