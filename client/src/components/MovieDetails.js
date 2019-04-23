import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const Center = styled.div`
  display: flex;
  justify-content: center;
`

class MovieDetails extends Component {
  state = {
    movie: {}
  }

  componentDidMount() {
    const movieId = this.props.match.params.id
    fetch(`/api/tickets/${movieId}`)
    .then(res => res.json())
    .then(movie => this.setState({ movie }))
  }

  render() {
    return (
      <Fragment>
        <Center>
          <h1>Movie</h1>
        </Center>
        <Center>
          {
            this.state.movie.movieName && (
              <div>
                <h4>Movie Name: {this.state.movie.movieName}</h4>
                <h4>Description: {this.state.movie.description}</h4>
                <h4>Price: {this.state.movie.price}</h4>
              </div>
            )
          }
        </Center>
      </Fragment>
    )
  }
}

export default MovieDetails