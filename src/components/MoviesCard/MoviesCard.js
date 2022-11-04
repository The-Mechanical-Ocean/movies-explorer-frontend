import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import ok from "../../images/ok.svg";
import cross from "../../images/cross.svg";

function MoviesCard({ card, saveMovie, savedMovies, handleDeleteMovie }) {
  const location = useLocation();
  const isSaved = card.id
    ? savedMovies.map((i) => i.movieId).includes(card.id)
    : location.pathname === "/saved-movies"
    ? true
    : "";

  function handleSave() {
    saveMovie({
      ...card,
      image: `https://api.nomoreparties.co/${card.image.url}`,
      thumbnail: `https://api.nomoreparties.co/${card.image.formats.thumbnail.url}`,
      movieId: card.id,
    });
  }

  function handleDelete() {
    if (location.pathname === "/saved-movies") {
      handleDeleteMovie(card);
    }
    if (location.pathname === "/movies") {
      handleDeleteMovie(savedMovies.find((i) => i.movieId === card.id));
    }  
  }

  function convertHoursAndMinutes() {
    const minutes = card.duration % 60;
    const hours = Math.floor(card.duration / 60);

    if (hours === 0) {
      return `${card.duration} минут`;
    }
    return `${hours}ч ${minutes}м`;
  }
  
  return (
    <div className="movie-card" key={card._id || card.movieId}>
      <div className="movie-card__text-container">
        <h2 className="movie-card__title" title={card.nameRU}>
          {card.nameRU}
        </h2>
        <p className="movie-card__time">{convertHoursAndMinutes()}</p>
      </div>
      <a href={card.trailerLink} className="movie-card__link" target=" _blank">
        <img
          className="movie-card__image"
          src={
            location.pathname === "/saved-movies"
              ? `${card.image}`
              : `https://api.nomoreparties.co${card.image.url}`
          }
          alt="movie poster"
        />
      </a>
      {location.pathname === "/saved-movies" && (
        <button
          className="movie-card__button"
          onClick={handleDelete}
          type="button"
        >
          <img
            className="movie-card__button-img"
            alt="delete movie icon"
            src={cross}
          />
        </button>
      )}
      {location.pathname === "/movies" && (
        <button
          className={
            isSaved
              ? "movie-card__button movie-card__button_red"
              : "movie-card__button"
          }
          onClick={isSaved ? handleDelete : handleSave}
          type="button"
        >
          {isSaved ? (
            <img
              className="movie-card__button-img"
              alt="saved movie img"
              src={ok}
            />
          ) : (
            <p className="movie-card__button-text">Сохранить</p>
          )}
        </button>
      )}
    </div>
  );
}

export default MoviesCard;
