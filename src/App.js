import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/header'
import HomePage from './components/views/home-page'
import ContactPage from './components/views/contact-page'
import BookPage from './components/views/book-page'
import NotFoundPage from './components/views/not-found-page'

import * as actions from './actions'

class App extends Component {
  componentWillMount() {
      this.props.snapshotSiteData('home', '4OQitB7Enm466COeq0meCI')
      this.props.snapshotSiteData('book', '68RN7ii6woQEOmwcCYwiuo')
      this.props.snapshotSiteData('contact', '69C3xeSrsIyI4YiyqQQ4mg')
  }

  render() {
    return (
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
  }
}

export default connect(null, actions)(App)
