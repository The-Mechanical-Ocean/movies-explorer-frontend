import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { filterMovies } from "../../utils/filterMovies";
import "../Movies/Movies.css";

function SavedMovies(props) {
  const [film, setFilm] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);
  const [checkShorts, setCheckShorts] = React.useState(false);
  const [doSearch, setDoSearch] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  React.useEffect(() => {
    if (props.savedMovies.length > 0) {
      setSearchResult(props.savedMovies);
    }
  }, [props.savedMovies]);

  React.useEffect(() => {
    if (props.savedMovies.length === 0) {
      setSearchResult(props.savedMovies);
    }
  }, [props.handleDeleteMovie]);

  React.useEffect(() => {
    const filteredMovies = filterMovies(props.savedMovies, film, checkShorts);
    setSearchResult(filteredMovies);
    setDoSearch(false);
    setError(false);

    if (filteredMovies.length === 0 && film.length > 0) {
      setErrorText("Ничего не найдено");
      return setError(true);
    }
  }, [doSearch, checkShorts]);

  function showShortMovies() {
    setCheckShorts(!checkShorts);
  }

  function handleMovieSearch(e) {
    e.preventDefault();
    if (film === "") {
      setErrorText("Нужно ввести ключевое слово");
      return setError(true);
    } else {
      setDoSearch(true);
    }
  }

  function handleFilmChange(e) {
    setFilm(e.target.value);
  }
  return (
    <main className="movies">
      <SearchForm
        searchText={film}
        handleFilmChange={handleFilmChange}
        showShortMovies={showShortMovies}
        handleMovieSearch={handleMovieSearch}
        isShortMovie={checkShorts}

        // handleMovieSearch={handleMovieSearch}
        // handleFilmChange={handleFilmChange}
        // searchText={searchText}
        // showShortMovies={showShortMovies}
        // isShortMovie={isShortMovie}
      />
      <MoviesCardList
        cards={searchResult}
        handleDeleteMovie={props.handleDeleteMovie}
        isLoading={props.isLoading}
        error={error}
        errorText={errorText}

        // cards={movies}
        // saveMovie={props.handleSaveMovie}
        // visibleMoviesList={visibleMovies}
        // handleLoadMore={handleLoadMore}
        // isLoading={isLoading}
        // error={error}
        // errorText={errorText}
      />
    </main>
  );
}

export default SavedMovies;
