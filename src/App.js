import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/header'
import Footer from './components/footer'
import ScrollToTop from './components/helpers/scroll-top'
import HomePage from './components/views/home/home-page'
import ContactPage from './components/views/contact/contact-page'
import BookPage from './components/views/books/book-page'
import NotFoundPage from './components/views/not-found/not-found-page'

import * as actions from './actions'

class App extends Component {
  componentWillMount() {
    const { home, book, contact } = this.props.pages
    const { snapshotSiteData: snapshot } = this.props

    !home.isFetched && snapshot('home', '4OQitB7Enm466COeq0meCI')
    !book.isFetched && snapshot('book', '68RN7ii6woQEOmwcCYwiuo')
    !contact.isFetched && snapshot('contact', '69C3xeSrsIyI4YiyqQQ4mg')
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
          <Footer />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {
  return {
    pages: state.pages
  }
}

export default connect(mapStateToProps, actions)(App)
