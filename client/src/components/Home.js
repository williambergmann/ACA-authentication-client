import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import MovieList from '../containers/MovieList'
import MovieActions from '../containers/MovieActions'

const Center = styled.div`
  display: flex;
  justify-content: center;
`
const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

class Home extends Component {
  componentDidMount() {
    fetch('/api/tickets')
      .then(res => res.json())
      .then(movies => this.props.listMovies(movies))
      .catch(() => this.props.listMovies([]))
  }

  render() {
    return (
      <Fragment>
        <Center>
          <h1>Movie Tickets</h1>
        </Center>
        <Center>
          <FlexWrapper>
            <MovieList />
            <MovieActions />
          </FlexWrapper>
        </Center>
      </Fragment>
    )
  }
}

export default Home