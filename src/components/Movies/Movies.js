import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { api } from "../../utils/MainApi";
import { getMovies } from "../../utils/MoviesApi";
import { filterMovies } from "../../utils/filterMovies";
import "./Movies.css";
const EVENTS = ["resize", "orientationchange"];

function Movies(props) {
  const [movie, setMovie] = React.useState([]);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [visibleMovies, setVisibleMovies] = React.useState(getStartRows(width));
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

    EVENTS.forEach((event) => {
      window.addEventListener(event, handleWindowSize);
    });

    return () => {
      EVENTS.forEach((event) => {
        window.removeEventListener(event, handleWindowSize);
      });
    };
  }, []);

  React.useEffect(() => {
    setError(false);
    const filtered = filterMovies(movies, searchText, isShortMovie);
    const moviesToDisplay = filtered;
    localStorage.setItem("filteredMovies", JSON.stringify(moviesToDisplay));
    localStorage.setItem("isShortMovie", isShortMovie);
    const filteredMoviesInLocal =
      JSON.parse(localStorage.getItem("filteredMovies")) || [];
    setMovie(filteredMoviesInLocal);

    if (filteredMoviesInLocal.length === 0 && searchText.length > 0) {
      setIsLoading(false);
      setErrorText("Ничего не найдено");
      return setError(true);
    }
    // убрана зависимость от изменения текста поиска для
    // предотвращения лишнего рендеринга компонента
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies, isShortMovie]);

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

  function handleSearchChange(e) {
    setSearchText(e.target.value);
  }

  function handleSaveMovie(movie) {
    api
      .saveMovie(movie)
      .then((res) => {
        props.setSavedMovies([res, ...props.savedMovies]);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
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
      setIsLoading(true);
      getMovies()
        .then((res) => {
          localStorage.setItem("isShortMovie", JSON.stringify(isShortMovie));
          localStorage.setItem("searchText", searchText);
          setMovies(res);
          localStorage.setItem("Movies", JSON.stringify(res));

          localStorage.setItem("searchText", searchText);
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
    } else {
      setMovies(localMovies);
      setIsLoading(false);
      localStorage.setItem("searchText", searchText);
    }
  }

  return (
    <main className="movies">
      <SearchForm
        handleMovieSearch={handleMovieSearch}
        handleSearchChange={handleSearchChange}
        searchText={searchText}
        showShortMovies={showShortMovies}
        isShortMovie={isShortMovie}
      />
      <MoviesCardList
        cards={movie}
        saveMovie={handleSaveMovie}
        visibleMoviesList={visibleMovies}
        handleLoadMore={handleLoadMore}
        isLoading={isLoading}
        error={error}
        errorText={errorText}
        savedMovies={props.savedMovies}
        handleDeleteMovie={props.handleDeleteMovie}
      />
    </main>
  );
}

export default Movies;
