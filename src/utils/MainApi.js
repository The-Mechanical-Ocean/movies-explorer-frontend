class MainApi {
constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
}

get _headers() {
    return {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
    }
}

_checkResponse(res) {
    if (res.ok) {
        return res.json()
    }
    else {
        return Promise.reject(res.status)
    }
}

getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
    headers: this._headers
    })
    .then(this._checkResponse)
}

getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
    headers: this._headers
    })
    .then(this._checkResponse)
}

editProfile(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
        name,
        email
    })
    })
    .then(this._checkResponse)
}

changeLikeCardStatus(id, isLiked) {
    return fetch (`${this._baseUrl}/cards/${id}/likes`, {
    method: isLiked ? 'PUT' : 'DELETE',
    headers: this._headers
    })
    .then(this._checkResponse)
}


saveMovie( director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId) {
    return fetch(`${this._baseUrl}/movies`, {
    method: 'POST',
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
    })
    })
    .then(this._checkResponse)
}

deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
    method: 'DELETE',
    headers: this._headers
    })
    .then(this._checkResponse)
}

setAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
        avatar
    })
    })
    .then(this._checkResponse)
    }
}

export const Api = new MainApi({
    baseUrl: 'https://api.movies-explorer-T-M-O.nomoredomains.xyz',
});