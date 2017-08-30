import { combineReducers } from 'redux'

import {
  CREATE_POST,
  READ_POST,
  UPDATE_POST,
  DELETE_POST
} from '../actions'

function post (state = {}, action) {
    switch(action.type) {
        default :
            return state
    }
}

export default combineReducers({
  post
})
