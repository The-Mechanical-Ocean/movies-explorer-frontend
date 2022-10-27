import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';

function MoviesCardList({cards, saveMovie, handleDeleteMovie, handleLoadMore, visibleMoviesList}) {
  const location = useLocation();
  return (
    <section className='movie-li'>
      <div className='movie-li__container'>
        {location.pathname === '/movies' && cards.slice(0, visibleMoviesList).map((card) => (
          <MoviesCard key={card.id} card={card} savedMovies={cards}
          handleDeleteMovie={handleDeleteMovie} saveMovie={saveMovie}/>
        ))}
        {location.pathname === '/saved-movies' && cards.map((card) => (
                            <MoviesCard key={card.movieId} card={card} handleDeleteMovie={handleDeleteMovie}
                                saveMovie={saveMovie}  />
                        ))
                        }
      </div>
      {location.pathname === '/movies' && visibleMoviesList < cards.length &&
        <button className='movie-li__button-add' type='button'
                onClick={handleLoadMore}>Ещё</button>
      }        
    </section>
  );
};

export default MoviesCardList;