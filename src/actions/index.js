import { snapshot } from 'react-snapshot'
import { client } from './config'

// action types
export const FETCH_PAGE_DATA = 'FETCH_PAGE_DATA'
export const REQUEST_PAGE_DATA = 'REQUEST_PAGE_DATA'
export const RECEIVE_PAGE_DATA = 'RECEIVE_PAGE_DATA'
export const SNAPSHOT_SITE_DATA = 'SNAPSHOT_SITE_DATA'

// fetches data from Contenful API based on section variable
// and call additional dispatches to track the request
export function snapshotSiteData(page, id) {
  const request = snapshot(() => {
    return client.getEntries({
      content_type: 'page',
      include: 9,
      'sys.id': id,
    })
    .then((response) => response)
    .catch(console.error)
  })

    return dispatch => {
      dispatch(requestPageData(page, id))

      return request
        .then(response => dispatch(receivePageData(response, page, id)))
    }
}

export function fetchPageData(page, id) {
  const request = client.getEntries({
    content_type: 'page',
    include: 9,
    'sys.id': id,
  })
    .then((response) => {
      return response
    })
    .catch(console.error)

    return dispatch => {
      dispatch(requestPageData(page, id))

      return request
        .then(response => dispatch(receivePageData(response, page, id)))
    }
}

// action dispatched by fetchPageData
// after request is made to Contentful API
export function requestPageData(page, id) {
  return {
    type: REQUEST_PAGE_DATA,
    payload: {
      isFetching: true,
      page,
      id
    }
  }
}

// action dispatched by fetchPageData
// after request is resolved with the response
// from the API being passed along to the section reducer
export function receivePageData(response, page, id) {
  return {
    type: RECEIVE_PAGE_DATA,
    payload: {
      isFetching: false,
      response,
      page,
      id
    }
  }
}
