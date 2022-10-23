import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import cards from '../../utils/cards'
import './Movies.css';

function Movies(props) {
  return (
    <main className='movies'>
      <SearchForm onSubmit={props.handleMovieSearch}/>
      <MoviesCardList cards={props.cards} saveMovie={props.handleSaveMovie}/>
    </main>
  );
};

export default Movies;