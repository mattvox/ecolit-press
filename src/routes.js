// Combine into App.js in future build, redundant component
// to be removed later

import React from 'react'
// import { AppContainer } from './components/styled/theme'
// import { Route, IndexRoute } from 'react-router'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from './components/views/home-page'
// import AboutPage from './components/views/about-page'
import ContactPage from './components/views/contact-page'
import BookPage from './components/views/book-page'
import NotFoundPage from './components/views/not-found-page'

import Header from './components/header'

export default (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        {/* <Route exact path='/about' component={AboutPage} /> */}
        <Route exact path='/contact' component={ContactPage} />
        {/* TODO: make sure to redirect if book is not found!! */}
        <Route exact path='/books/:title' component={BookPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)
