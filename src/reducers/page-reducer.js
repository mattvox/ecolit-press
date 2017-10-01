import _ from 'lodash'
import { REQUEST_PAGE_DATA, RECEIVE_PAGE_DATA } from '../actions/index'

// creates initial state based on a page array,
// to dry up the code a bit since each section
// was very similar. Landing page content is
// provided in the initial state to reduce
// perceived load time.
function createInitialState() {
  const pages = ['home', 'about', 'book', 'contact']

  const state = {}

  pages.forEach(page => {
    state[page] = {
      data: {},
      isFetching: false,
      isFetched: false,
    }
  })

  return state
}

function requestPageData(state, action) {
  console.log('STATE', state)
  const { page, isFetching } = action.payload
  const { data } = state[page]

  return {
    ...state,
    [page]: { data, isFetching, isFetched: false, },
   }
}

function receivePageData(state, action) {
  const { page, isFetching } = action.payload
  const { sections: data } = action.payload.response.items[0].fields

  return {
    ...state,
    [page]: {
      data: _.mapKeys(data, 'fields.id'),
      isFetching,
      isFetched: true,
    }
  }
}

export default function (state = createInitialState(), action) {
  switch (action.type) {
    case REQUEST_PAGE_DATA: return requestPageData(state, action)
    case RECEIVE_PAGE_DATA: return receivePageData(state, action)
    default: return state;
  }
}
