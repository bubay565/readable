import { combineReducers } from 'redux'
import categoriesReducer from './categoriesReducer'
import postReducer from './postReducer'

export default combineReducers({
  posts: postReducer,
  categories: categoriesReducer
})
