import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/header'
import HomePage from './components/views/home-page'
import ContactPage from './components/views/contact-page'
import BookPage from './components/views/book-page'
import NotFoundPage from './components/views/not-found-page'

const App = (props) => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/contact' component={ContactPage} />
        {/* TODO: make sure to redirect if book is not found!! */}
        <Route exact path='/books/:title' component={BookPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
