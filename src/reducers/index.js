import { combineReducers } from 'redux'

import {
  CREATE_POST,
  READ_POST,
  UPDATE_POST,
  DELETE_POST,
  CREATE_COMMENT,
  READ_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  UPVOTE,
  DOWNVOTE
} from '../actions'

function posts (state = [], action) {
  const { id, timestamp, title, body, author, category, deleted } = action

    switch(action.type) {
        case CREATE_POST:
          return state.concat(action)

        case READ_POST:
          return {

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
          return  state.filter(post => post.deleted !== true)

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
  votes
})
