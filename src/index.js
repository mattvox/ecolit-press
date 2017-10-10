import React from 'react'
import { render } from 'react-snapshot'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

import App from './App'
import reducers from './reducers'

import './style/css/bootstrap.min.css'
import './style/css/font-awesome.min.css'
import './style/css/fonts.css'
import './style/css/index.css'

// import registerServiceWorker from './registerServiceWorker'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, /*preloadedState,*/ composeEnhancers(
  applyMiddleware(promise, thunk),
));


render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))
// registerServiceWorker()
