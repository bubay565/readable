import { combineReducers } from 'redux'

import {
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  FETCH_POSTS,
  DISPLAY_POSTS,
  FETCH_CATEGORIES,
  DISPLAY_CATEGORIES,
  SORT_POST,
  UPVOTE_POST
} from '../actions'

function categories(
  state = {
    categories: [],
    isLoading: false
  }, action
){
  switch(action.type){
    case FETCH_CATEGORIES:
      return {
        ...state,
        isLoading: true
      }

    case DISPLAY_CATEGORIES:
      return {
          ...state,
          isLoading: false,
          categories: action.categories
      }

    default:
      return state
  }
}

function posts (state = {
  posts: [],
  isLoading: false,
  sortParam: 'timestamp'
}, action) {
  const { id, timestamp, title, body, author, category, voteScore, deleted } = action
    switch(action.type) {
        case FETCH_POSTS:
          return {
            ...state,
            isLoading: true
          }

        case CREATE_POST:
        console.log('current state', state);
          return {
            ...state,
            posts: state.posts.concat({
              id,
              timestamp,
              title,
              body,
              author,
              category,
              voteScore,
              deleted
            })
          }

        case DISPLAY_POSTS:
          return {
              ...state,
              posts: action.posts
          }

        case UPDATE_POST:
          return {
            ...state,
          }

        case DELETE_POST:
          return {
            ...state,
            posts: action.posts
          }

        case SORT_POST:
          return {
            ...state,
            sortParam: action.sortParam
          }

        case UPVOTE_POST:
        console.log('reducer', action.voteScore)
          return {
            ...state,
            posts: [...state.posts.filter(item=> item.id !== action.post), action.post]
          }
        default :
            return state
    }
}

export default combineReducers({
  posts,
  categories
})
