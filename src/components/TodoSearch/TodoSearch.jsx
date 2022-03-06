import React, { useState } from 'react';
import './TodoSearch.css'


const TodoSearch = ({ searchValue, setSearchValue }) => {
    const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return (
    <div className='search'>
      <input className='search-input' placeholder="Search" onChange={onSearchValueChange} value={searchValue}/>
      <a className='search-button' href=""><img src="https://img.icons8.com/ios/50/000000/search--v1.png"/></a>
    </div>
  )
}

export {TodoSearch};