import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';

function MoviesCardList({cards, saveMovie, handleDeleteMovie}) {
  const location = useLocation();
  return (
    <section className='movie-li'>
      <div className='movie-li__container'>
        {location.pathname === '/movies' && cards.map((card) => (
          <MoviesCard key={card.id} card={card} savedMovies={cards}
          handleDeleteMovie={handleDeleteMovie} saveMovie={saveMovie}/>
        ))}
        {location.pathname === '/saved-movies' && cards.map((card) => (
                            <MoviesCard key={card.movieId} card={card} handleDeleteMovie={handleDeleteMovie}
                                saveMovie={saveMovie}  />
                        ))
                        }
      </div>
      <button className='movie-li__button-add' type='button'>Ещё</button>
    </section>
  );
};

export default MoviesCardList;