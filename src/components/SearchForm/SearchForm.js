import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm(props) {
  const [searchText, setSearchText] = React.useState('');
  const [isShortMovie, setIsShortMovie] = React.useState(false);

  
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(searchText, isShortMovie) 
  }
  
  return (
    <section className='search'>
      <form className='search__form' name='search-bar'
            onSubmit={handleSubmit}>
        <div className='search__container'>
          <div className='search__image-loop'></div>  
          <input className='search__input' type='text' placeholder='Фильм' required
                 onChange={(e) => setSearchText(e.target.value)}
                 value={searchText} />
          <button className='search__button' type='submit'><p className='search__button-text'>Найти</p></button>
          <FilterCheckbox onChange={setIsShortMovie}
                          checked={isShortMovie}/>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;