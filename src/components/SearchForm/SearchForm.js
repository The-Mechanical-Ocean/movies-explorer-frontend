import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm(props) {
  // const [searchText, setSearchText] = React.useState(
  //   props.getSearchStoreValue || ""
  // );
  // const [isShortMovie, setIsShortMovie] = React.useState(
  //   JSON.parse(localStorage.getItem("isShortMovie")) || false
  // );

  // function getSearchStoreValue() {
  //   const searchStoreValue = localStorage.getItem('filmSearch');
  //   if (!searchStoreValue) {
  //       return '';
  //   }
  //   return searchStoreValue;
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   props.onSubmit(searchText, isShortMovie);
  // }

  return (
    <section className="search">
      <form
        className="search__form"
        name="search-bar"
        onSubmit={props.handleMovieSearch}
      >
        <div className="search__container">
          <div className="search__image-loop"></div>
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
            // required
            onChange={props.handleFilmChange}
            value={props.searchText || ""}
          />
          <button className="search__button" type="submit">
            <p className="search__button-text">Найти</p>
          </button>
          <FilterCheckbox
            onChange={props.showShortMovies}
            checked={props.isShortMovie}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
