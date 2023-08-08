class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  get _headers() {
    return {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    };
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  }

  register(password, email, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email, name }),
    }).then((res) => this._checkResponse(res));
  }

  authorize(password, email) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    }).then((res) => this._checkResponse(res));
  }

  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  editProfile(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._checkResponse);
  }

  saveMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  }) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
      }),
    }).then(this._checkResponse);
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

export const api = new MainApi({
  baseUrl: "https://api.movies.alexkudrin.com",
});
