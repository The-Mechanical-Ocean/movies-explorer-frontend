import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { getMovies } from "../../utils/MoviesApi";
import { filterMovies } from "../../utils/filterMovies";
import "./Movies.css";

function Movies(props) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [visibleMovies, setVisibleMovies] = React.useState(getStartRows(width));
  const events = ["resize", "orientationchange"];
  const timerId = React.useRef();
  const [searchText, setSearchText] = React.useState(getSearchStoreValue());
  const [isShortMovie, setIsShortMovie] = React.useState(
    JSON.parse(localStorage.getItem("isShortMovie")) || false
  );
  const localMovies = JSON.parse(localStorage.getItem("Movies"));
  const [movies, setMovies] = React.useState(localMovies || []);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  React.useEffect(() => {
    function handleWindowSize() {
      clearTimeout(timerId.current);
      timerId.current = setTimeout(() => {
        setWidth(window.innerWidth);
      }, 50);
    }

    events.forEach((event) => {
      window.addEventListener(event, handleWindowSize);
    });

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, handleWindowSize);
      });
    };
  }, []);

  function handleLoadMore() {
    return setVisibleMovies((Movies) => Movies + addLoadMovie(width));
  }

  function showShortMovies() {
    setIsShortMovie(!isShortMovie);
  }

  function getSearchStoreValue() {
    const searchStoreValue = localStorage.getItem("searchText");
    if (!searchStoreValue) {
      return "";
    }
    return searchStoreValue;
  }

  function handleFilmChange(e) {
    setSearchText(e.target.value);
  }

  function handleMovieSearch(e) {
    e.preventDefault();
    setError(false);
    setIsLoading(true);
    if (searchText === "") {
      setIsLoading(false);
      setErrorText("Нужно ввести ключевое слово");
      return setError(true);
    }
    if (!localMovies) {
      getMovies()
        .then((res) => {
          setIsLoading(false);
          // const filtered = filterMovies(res, searchText, isShortMovie);
          localStorage.setItem("isShortMovie", JSON.stringify(isShortMovie));
          localStorage.setItem("searchText", searchText);
          localStorage.setItem("Movies", JSON.stringify(res));
          setMovies(res);
        })
        .catch(() => {
          setError(true);
          setErrorText(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    setMovies(localMovies);
    setIsLoading(false);
    localStorage.setItem("searchText", searchText);
    // localStorage.setItem("isShortMovie", isShortMovie);
  }
  // console.log(setMovies);
  React.useEffect(() => {
    // debugger;
    // setError(false);
    const moviesToDisplay = filterMovies(movies, searchText, isShortMovie);
    localStorage.setItem("filteredMovies", JSON.stringify(moviesToDisplay));
    localStorage.setItem("isShortMovie", isShortMovie);
    const filteredMoviesInLocal =
      JSON.parse(localStorage.getItem("filteredMovies")) || [];
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      setMovies(filteredMoviesInLocal);
    }, 20);
    // setMovies(filteredMoviesInLocal);

    if (filteredMoviesInLocal.length === 0 && searchText.length > 0) {
      setIsLoading(false);
      setErrorText("Ничего не найдено");
      return setError(true);
      // setError(true);
    }
  }, [movies, searchText, isShortMovie]);
  return (
    <main className="movies">
      <SearchForm
        handleMovieSearch={handleMovieSearch}
        // getSearchStoreValue={getSearchStoreValue}
        handleFilmChange={handleFilmChange}
        searchText={searchText}
        showShortMovies={showShortMovies}
        isShortMovie={isShortMovie}
      />
      <MoviesCardList
        cards={movies}
        saveMovie={props.handleSaveMovie}
        visibleMoviesList={visibleMovies}
        handleLoadMore={handleLoadMore}
        isLoading={isLoading}
        error={error}
        errorText={errorText}
      />
    </main>
  );
}

export default Movies;

function getStartRows(width) {
  if (width >= 1280) {
    return 12;
  }
  if (width >= 768) {
    return 8;
  }

  return 5;
}

function addLoadMovie(width) {
  if (width >= 1280) {
    return 3;
  }
  return 2;
}
