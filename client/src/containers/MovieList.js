import { connect } from 'react-redux'
import MovieList from '../components/MovieList'

const mapStateToProps = (store) => {
  return {
    movies: store.movies
  }
}

export default connect(mapStateToProps)(MovieList)