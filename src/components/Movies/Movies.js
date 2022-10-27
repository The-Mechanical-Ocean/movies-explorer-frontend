import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import cards from '../../utils/cards'
import './Movies.css';

function Movies(props) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [visibleMoviesList, setVisibleMoviesList] = React.useState(getStartRows(width));

  React.useEffect(() => {
    function handleWindowSize () {
      setWidth(window.innerWidth);
    } 
    window.addEventListener('resize' , handleWindowSize)
    return () => window.removeEventListener('resize', handleWindowSize)
  },[width]);

  function getStartRows (width) {
    if(width >= 1280) {
      return 12
    }
    if(width >= 768) {
      return 8
    }
    else {
      return 5
    }
  }

  const addLoadMovie = (width) => {
    if (width >= 1280) {
        return 3;
    }
    return 2;
}

function handleLoadMore() {
  return setVisibleMoviesList((Movies) => Movies + addLoadMovie(width))
}


  return (
    <main className='movies'>
      <SearchForm onSubmit={props.handleMovieSearch}/>
      <MoviesCardList cards={props.cards} saveMovie={props.handleSaveMovie}
                      visibleMoviesList={visibleMoviesList} handleLoadMore={handleLoadMore}   />
    </main>
  );
};

export default Movies;