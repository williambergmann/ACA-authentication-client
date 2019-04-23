import { connect } from 'react-redux'
import Home from '../components/Home'
import { listMovies } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    listMovies: (movies) => dispatch(listMovies(movies))
  }
}

export default connect(null, mapDispatchToProps)(Home)