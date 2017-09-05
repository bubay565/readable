import { combineReducers } from 'redux'

import {
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  CREATE_COMMENT,
  READ_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  UPVOTE,
  DOWNVOTE,
  DISPLAY_POSTS,
  DISPLAY_CATEGORIES
} from '../actions'

function categories(state = {}, action){
  switch(action.type){
    case DISPLAY_CATEGORIES:
    return {
        categories: action.categories
    }
    default:
      return state
  }
}

function posts (state = {}, action) {
  const { id, timestamp, title, body, author, category, deleted } = action
    switch(action.type) {
        case CREATE_POST:
          return state.concat(action)

        case DISPLAY_POSTS:
          return {
            posts: action.posts
          }

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

        default :
            return state
    }
}

function comments (state = {}, action) {
    switch(action.type) {
      case CREATE_COMMENT:
        return {

        }

      case READ_COMMENT:
        return {

        }

      case UPDATE_COMMENT:
        return {

        }

      case DELETE_COMMENT:
        return {

        }

      default:
        return state
    }
}

function votes (state = {}, action) {
  switch(action.type) {
    case UPVOTE:
      return {
        ...state
      }
    case DOWNVOTE:
      return {
        ...state
      }

    default:
      return state
  }
}

export default combineReducers({
  posts,
  comments,
  votes,
  categories
})
