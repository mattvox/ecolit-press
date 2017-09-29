import React from 'react'
// import { Route, IndexRoute } from 'react-router'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './App'
import HomePage from './containers/home-page'
import AboutPage from './containers/about-page'
import ContactPage from './containers/contact-page'
import BookPage from './containers/book-page'
import NotFoundPage from './containers/not-found-page'

// export default (
//   <Route path='/' component={App}>
//     <IndexRoute component={HomePage} />
//   </Route>
// )

export default (
  <BrowserRouter>
    <div>
      <App />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        {/* TODO: make sure to redirect if book is not found!! */}
        <Route path='/books/:title' component={BookPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)
