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
  UPDATE_POST_VOTE,
  UPDATE_COMMENT_VOTE,
  CREATE_COMMENT
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
          return {
            ...state,
            posts: [...state.posts, {
              id,
              timestamp,
              title,
              body,
              author,
              category,
              voteScore,
              deleted
            }]
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
            posts: state.posts.filter(post => post.id !== action.id)
          }

        case SORT_POST:
          return {
            ...state,
            sortParam: action.sortParam
          }

        case UPDATE_POST_VOTE:
          return {
            ...state,
            posts: state.posts.map((post) => {
                    if(post.id === id){
                      post.voteScore = voteScore
                    }
                    return post
                  })
            }
        case UPDATE_COMMENT_VOTE:
          return {
            ...state,
            posts: state.posts.map((post) => {
                      if(post.id === action.parentId){
                        post.comments.map((comment) => {
                          if(comment.id === action.id){
                            comment.voteScore = action.voteScore
                          } return comment
                        })
                      } return post
                    })
          }

        case CREATE_COMMENT:
          return {
            ...state,
            posts: state.posts.map((post) => {
              if(post.id === action.comment.parentId){
                post.comments = [...post.comments, action.comment]
              }
              return post
            })
          }

        default :
            return state
    }
}

export default combineReducers({
  posts,
  categories
})
