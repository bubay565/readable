import { combineReducers } from 'redux'

import {
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  CREATE_COMMENT,
  DISPLAY_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  UPVOTE_POST,
  DOWNVOTE_POST,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  FETCH_POSTS,
  DISPLAY_POSTS,
  FETCH_CATEGORIES,
  DISPLAY_CATEGORIES,
  SORT_POST
} from '../actions'

function categories(
  state = {
    categories: [],
    isLoading: false
  }, action
){
  switch(action.type){
    case FETCH_CATEGORIES:
      return Object.assign({}, state, {
        isLoading: true
      });
    case DISPLAY_CATEGORIES:
      return {
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
  const { id, timestamp, title, body, author, category, deleted } = action
    switch(action.type) {
        case FETCH_POSTS:
          return Object.assign({}, state, {
            isLoading: true
          });
        case CREATE_POST:
          return [
            ...state,
            {
              id,
              timestamp,
              title,
              body,
              author,
              category,
              deleted
            }
          ]

        case DISPLAY_POSTS:
          return Object.assign({}, state, {
            posts: action.posts,
          });

        case UPDATE_POST:
          return {
            ...state,
            [id]: {
              ...state[id],
              [title]: title,
              [body]: body
            }
          }

        case DELETE_POST:
          return {
            ...state,
            [posts]: action.posts.filter(post => post.deleted !== true)
          }

        case SORT_POST:
          return Object.assign({}, state, {
            sortParam: action.param
          });

        default :
            return state
    }
}

function comments (state = [], action) {
    switch(action.type) {
      case CREATE_COMMENT:
        return [

        ]

      case DISPLAY_COMMENT:
        return {
          comments: action.comments
        }

      case UPDATE_COMMENT:
        return [

        ]

      case DELETE_COMMENT:
        return [

        ]

      default:
        return state
    }
}

function votes (state = {}, action) {
  switch(action.type) {
    case UPVOTE_POST:
      return {
        ...state
      }
    case DOWNVOTE_POST:
      return {
        ...state
      }

    default:
      return state
  }
}

export default combineReducers({
  posts,
  categories
})
