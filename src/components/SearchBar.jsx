import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  function handlerOnsearch () {
    if (typeof onSearch === 'function') {
      const  input = document.getElementById('search-bar-input') 
      onSearch(input.value)
    }
  }
  return <div>
    <input id= 'search-bar-input' type="text" placeholder= 'Ciudad...' />
    <button onClick= {handlerOnsearch}>Agregar</button>
  </div>
};