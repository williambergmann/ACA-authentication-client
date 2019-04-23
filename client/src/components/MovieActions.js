import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'
import styled from 'styled-components'

const FlexForm = styled.form`
  margin: 50px;
  display: flex;
  flex-direction: column;
`

class MovieActions extends Component {
  state = {
    createMovieName: '',
    createMovieDescription: '',
    createMoviePrice: '',
    deleteMovieName: '',
  }

  handleTextChange = (e) => {
    const newState = { ...this.state }
    newState[e.target.id] = e.target.value
    this.setState(newState)
  }

  createMovie = (e) => {
    e.preventDefault()
    fetch('/api/tickets', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        movieName: this.state.createMovieName,
        description: this.state.createMovieDescription,
        price: this.state.createMoviePrice
      })
    })
    .then(res => res.json())
    .then(result => this.props.createMovie(result))
    .then(() => {
      this.setState({
        createMovieName: '',
        createMovieDescription: '',
        createMoviePrice: ''
      })
    })
  }

  deleteMovie = (e) => {
    e.preventDefault()
    fetch(`/api/tickets/${this.state.deleteMovieName}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(result => this.props.deleteMovie(this.state.deleteMovieName))
    .then(() => {
      this.setState({
        deleteMovieName: ''
      })
    })
  }

  render() {
    return (
      <div>
        <FlexForm onSubmit={this.createMovie}>
          <TextField
            onChange={this.handleTextChange}
            id="createMovieName"
            label="Movie Name"
            value={this.state.createMovieName}
            variant="outlined" />
          <TextField
            onChange={this.handleTextChange}
            id="createMovieDescription"
            label="Description"
            value={this.state.createMovieDescription}
            variant="outlined" />
          <TextField
            onChange={this.handleTextChange}
            id="createMoviePrice"
            label="Price"
            value={this.state.createMoviePrice}
            variant="outlined" />
          <Button type="submit" variant="contained">Create Movie</Button>
        </FlexForm>
        <FlexForm onSubmit={this.deleteMovie}>
          <TextField
            onChange={this.handleTextChange}
            id="deleteMovieName"
            label="Movie Name"
            value={this.state.deleteMovieName}
            variant="outlined" />
          <Button type="submit" variant="contained">Delete Movie</Button>
        </FlexForm>
      </div>
    )
  }
}

export default MovieActions