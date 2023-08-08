import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm(props) {
  return (
    <section className="search">
      <form
        className="search__form"
        name="search-bar"
        onSubmit={props.handleMovieSearch}
        noValidate
      >
        <div className="search__container">
          <div className="search__image-loop"></div>
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
            onChange={props.handleSearchChange}
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
