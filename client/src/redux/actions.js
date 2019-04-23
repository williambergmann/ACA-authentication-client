export function listMovies(movies) {
  return {
    type: 'LIST_MOVIES',
    value: movies
  }
}

export function createMovie(movie) {
  return {
    type: 'CREATE_MOVIE',
    value: movie
  }
}

export function deleteMovie(movieName) {
  return {
    type: 'DELETE_MOVIE',
    value: movieName
  }
}