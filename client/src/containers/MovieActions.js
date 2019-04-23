import { connect } from 'react-redux'
import MovieActions from '../components/MovieActions'
import { createMovie, deleteMovie } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    createMovie: (movie) => dispatch(createMovie(movie)),
    deleteMovie: (movieName) => dispatch(deleteMovie(movieName))
  }
}

export default connect(null, mapDispatchToProps)(MovieActions)