import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { useLocation } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({
  cards,
  saveMovie,
  handleDeleteMovie,
  handleLoadMore,
  visibleMoviesList,
  isLoading,
  error,
  errorText,
  savedMovies,
}) {
  const location = useLocation();

  return (
    <section className="movie-li">
      {isLoading ? (
        <Preloader />
      ) : error ? (
        <p className="movie-li__error">{errorText}</p>
      ) : (
        <>
          <div className="movie-li__container">
            {location.pathname === "/movies" &&
              cards
                .slice(0, visibleMoviesList)
                .map((card) => (
                  <MoviesCard
                    key={card.id}
                    card={card}
                    savedMovies={savedMovies}
                    handleDeleteMovie={handleDeleteMovie}
                    saveMovie={saveMovie}
                  />
                ))}
            {location.pathname === "/saved-movies" &&
              cards.map((card) => (
                <MoviesCard
                  key={card.movieId}
                  card={card}
                  handleDeleteMovie={handleDeleteMovie}
                  saveMovie={saveMovie}
                  isLoading={isLoading}
                />
              ))}
          </div>
          {location.pathname === "/movies" && visibleMoviesList < cards.length && (
            <button
              className="movie-li__button-add"
              type="button"
              onClick={handleLoadMore}
            >
              Ещё
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
