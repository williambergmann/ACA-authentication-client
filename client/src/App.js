import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import Router from './router'
import store from './redux/store'

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(0deg, rgba(94,0,191,1) 0%, rgba(255,61,0,1) 100%);
    /*background: rgb(94,0,191);
    color: #fff;*/
    font-family: "Comic Sans MS", cursive, sans-serif;
  }
`

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle />
      <Router />
    </Provider>
  </BrowserRouter>
)

export default App;
