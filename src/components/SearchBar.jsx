import React from 'react';
import s from './SearchBar.module.css';
import {IoSearchCircle} from 'react-icons/io5';
export default function SearchBar({onSearch}) {
  // acá va tu código
  function handlerOnsearch () {
    if (typeof onSearch === 'function') {
      const  input = document.getElementById('search-bar-input') 
      onSearch(input.value)
    }
  }
  return <div className={s.searchBar}>
    <input id= 'search-bar-input' type="text" placeholder= 'Ciudad...' />
    <button onClick= {handlerOnsearch}> <IoSearchCircle/> </button>
  </div>
};