import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 50px;
`

const MovieList = (props) => (
  <Wrapper>
    <h3>Available Movies</h3>
    {
      props.movies.map((movie, index) => (
       <p
        key={index}>{movie.movieName} &nbsp;
        <Link to={`/movies/${movie._id}`}>details</Link>
        </p>
      ))
    }
  </Wrapper>
)

export default MovieList