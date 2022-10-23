import React from 'react';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import cards from "../../utils/cards";
import SearchForm from "../SearchForm/SearchForm";
import '../Movies/Movies.css';

function SavedMovies(props) {
  return (
    <main className='movies'>
      <SearchForm/>
      <MoviesCardList cards={props.savedMovies} handleDeleteMovie={props.handleDeleteMovie}/>
    </main>
  );
};

export default SavedMovies;