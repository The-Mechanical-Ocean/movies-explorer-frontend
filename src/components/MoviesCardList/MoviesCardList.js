import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';

function MoviesCardList({cards, saveMovies, deleteMovieCard, savedMovie}) {
  const location = useLocation();
  return (
    <section className='movie-li'>
      <div className='movie-li__container'>
        {location.pathname === '/movies' && cards.map((card) => (
          <MoviesCard key={card.id} card={card} savedMovie={savedMovie}
          deleteMovieCard={deleteMovieCard} saveMovies={saveMovies}/>
        ))}
        {location.pathname === '/saved-movies' && cards.map((card) => (
                            <MoviesCard key={card.movieId} card={card} deleteMovieCard={deleteMovieCard}
                                saveMovies={saveMovies}  />
                        ))
                        }
      </div>
      <button className='movie-li__button-add' type='button'>Ещё</button>
    </section>
  );
};

export default MoviesCardList;