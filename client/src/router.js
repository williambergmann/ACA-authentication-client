import React from 'react'
import { Route, Switch } from 'react-router'
import Home from './containers/Home'
import MovieDetails from './components/MovieDetails'
import NotFound from './components/NotFound'

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/movies/:id" component={MovieDetails} />
    <Route component={NotFound} />
  </Switch>
)

export default Router