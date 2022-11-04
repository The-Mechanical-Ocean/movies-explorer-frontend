import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { filterMovies } from "../../utils/filterMovies";
import "../Movies/Movies.css";

function SavedMovies(props) {
  const [searchText, setSearchText] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);
  const [isShortMovie, setIsShortMovie] = React.useState(false);
  const [doSearch, setDoSearch] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  React.useEffect(() => {
    setSearchResult(props.savedMovies);
  }, [props.savedMovies]);

  React.useEffect(() => {
    const filtered = filterMovies(props.savedMovies, searchText, isShortMovie);
    setSearchResult(filtered);
    setDoSearch(false);
    setError(false);

    if (filtered.length === 0 && searchText.length > 0) {
      setErrorText("Ничего не найдено");
      return setError(true);
    }
  }, [doSearch, isShortMovie]);

  function showShortMovies() {
    setIsShortMovie(!isShortMovie);
  }

  function handleMovieSearch(e) {
    e.preventDefault();
    if (searchText === "") {
      setErrorText("Нужно ввести ключевое слово");
      return setError(true);
    } else {
      setDoSearch(true);
    }
  }

  function handleSearchChange(e) {
    setSearchText(e.target.value);
  }

  return (
    <main className="movies">
      <SearchForm
        searchText={searchText}
        handleSearchChange={handleSearchChange}
        showShortMovies={showShortMovies}
        handleMovieSearch={handleMovieSearch}
        isShortMovie={isShortMovie}
      />
      <MoviesCardList
        cards={searchResult}
        handleDeleteMovie={props.handleDeleteMovie}
        isLoading={props.isLoading}
        error={error}
        errorText={errorText}
      />
    </main>
  );
}

export default SavedMovies;
