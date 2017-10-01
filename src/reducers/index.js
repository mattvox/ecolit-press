import { combineReducers } from 'redux';
import PageReducer from './page-reducer'

const rootReducer = combineReducers({
  pages: PageReducer,
})

export default rootReducer;
