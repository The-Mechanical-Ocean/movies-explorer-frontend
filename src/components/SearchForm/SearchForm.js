import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form' name='search-bar'>
        <div className='search__container'>
          <div className='search__image-loop'></div>  
          <input className='search__input' type='text' placeholder='Фильм' required/>
          <button className='search__button' type='submit'><p className='search__button-text'>Найти</p></button>
          <FilterCheckbox/>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;