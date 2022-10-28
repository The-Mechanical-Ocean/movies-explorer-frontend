import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies(props) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [visibleMovies, setVisibleMovies] = React.useState(getStartRows(width));
  const events = ['resize', 'orientationchange'];
  const timerId = React.useRef();
  
  React.useEffect(() => {
    function handleWindowSize () {
      clearTimeout(timerId.current)
      timerId.current = setTimeout (() => {
        setWidth(window.innerWidth)
      }, 50);
    }
     
    events.forEach((event) => {
      window.addEventListener(event, handleWindowSize)
    })

    return () => { 
      events.forEach((event) => window.removeEventListener(event, handleWindowSize))
    }
  },[]);

  function handleLoadMore() {
    return setVisibleMovies((Movies) => Movies + addLoadMovie(width))
  }

  return (
    <main className='movies'>
      <SearchForm onSubmit={props.handleMovieSearch}/>
      <MoviesCardList cards={props.cards} saveMovie={props.handleSaveMovie}
                      visibleMoviesList={visibleMovies} handleLoadMore={handleLoadMore}   />
    </main>
  );
};

export default Movies;

function getStartRows (width) {
  if(width >= 1280) {
    return 12
  }
  if(width >= 768) {
    return 8
  }

  return 5
}

function addLoadMovie (width) {
  if (width >= 1280) {
    return 3;
  }
  return 2;
}