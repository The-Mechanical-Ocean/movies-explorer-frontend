import React from 'react';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import cards from "../../utils/cards";
import SearchForm from "../SearchForm/SearchForm";
import '../Movies/Movies.css';

function SavedMovies() {
  return (
    <main className='movies'>
      <SearchForm/>
      <MoviesCardList cards={cards}/>
    </main>
  );
};

export default SavedMovies;