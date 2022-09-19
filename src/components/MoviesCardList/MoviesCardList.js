import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({cards}) {
  return (
    <section className='movie-li'>
      <div className='movie-li__container'>
        {cards.map((card) => (
          <MoviesCard key={card.id} card={card}/>
        ))}
      </div>
      <button className='movie-li__button-add'>Ещё</button>
    </section>
  );
};

export default MoviesCardList;