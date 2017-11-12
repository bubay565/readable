import { combineReducers } from 'redux'

import {
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  FETCH_POSTS,
  DISPLAY_POSTS,
  SET_POST_TO_EDIT,
  CANCEL_EDIT_POST,
  CONFIRM_DELETE_POST,
  CANCEL_DELETE_POST,
  FETCH_CATEGORIES,
  DISPLAY_CATEGORIES,
  SORT_POST,
  UPDATE_POST_VOTE,
  UPDATE_COMMENT_VOTE,
  CREATE_COMMENT,
  SET_COMMENT_TO_EDIT,
  CANCEL_EDIT_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
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
  sortParam: 'timestamp',
  editPost: false,
  postToEditId: '',
  editComment: false,
  commentToEditId: '',
  confirmDeleteModalOpen: false
}, action) {
  const { id, timestamp, title, body, author, category, voteScore, deleted } = action
    switch(action.type) {
        case FETCH_POSTS:
          return {
            ...state,
            isLoading: true,
            editPost: false,
            editComment: false,
          }

        case CREATE_POST:
          return {
            ...state,
            editPost: false,
            editComment: false,
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
              editPost: false,
              editComment: false,
              posts: action.posts
          }

        case UPDATE_POST:
          return {
            ...state,
            editPost: false,
            editComment: false,
            posts: state.posts.map(post => {
              if(post.id === action.post.id) {
                post.title = action.post.title
                post.body = action.post.body
              }
              return post
            })
          }

        case CONFIRM_DELETE_POST:
          return{
            ...state,
            editComment: false,
            editPost: false,
            posts: state.posts,
            postToEditId: action.id,
            confirmDeleteModalOpen: true
          }

          case CANCEL_DELETE_POST:
            return {
              ...state,
              editComment: false,
              editPost: false,
              posts: state.posts,
              postToEditId: '',
              confirmDeleteModalOpen: false
            }

        case DELETE_POST:
          return {
            ...state,
            editPost: false,
            editComment: false,
            confirmDeleteModalOpen: false,
            posts: state.posts.filter(post => post.id !== action.id)
          }

        case SORT_POST:
          return {
            ...state,
            editPost: false,
            editComment: false,
            sortParam: action.sortParam
          }

        case UPDATE_POST_VOTE:
          return {
            ...state,
            editPost: false,
            editComment: false,
            posts: state.posts.map((post) => {
                    if(post.id === id){
                      post.voteScore = voteScore
                    }
                    return post
                  })
            }

        case SET_POST_TO_EDIT:
          return {
            ...state,
            editComment: false,
            editPost: true,
            posts: state.posts,
            postToEditId: action.id
          }

        case CANCEL_EDIT_POST:
          return {
            ...state,
            editPost: false,
            editComment: false,
            posts: state.posts,
            postToEditId: ''
          }

        case UPDATE_COMMENT_VOTE:
          return {
            ...state,
            editPost: false,
            editComment: false,
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
            editPost: false,
            editComment: false,
            posts: state.posts.map((post) => {
              if(post.id === action.comment.parentId){
                post.comments = [...post.comments, action.comment]
              }
              return post
            })
          }

        case SET_COMMENT_TO_EDIT:
          return {
            ...state,
            editComment: true,
            editPost: false,
            posts: state.posts,
            commentToEditId: action.id,
            postToEditId: action.parentId
          }

        case CANCEL_EDIT_COMMENT:
          return {
            ...state,
            editComment: false,
            editPost: false,
            commentToEditId: '',
            postToEditId: '',
            posts: state.posts,
            confirmDeleteModalOpen: false
          }

        case UPDATE_COMMENT:
          return {
            ...state,
            editComment: false,
            editPost: false,
            commentToEditId: '',
            postToEditId: '',
            posts: state.posts.map((post) => {
                      if(post.id === action.comment.parentId){
                        post.comments.map((comment) => {
                          if(comment.id === action.comment.id){
                            comment.body = action.comment.body
                            comment.timestamp = action.comment.timestamp
                          } return comment
                        })
                      } return post
                    })
          }

        case DELETE_COMMENT:
          return {
            ...state,
            editComment: false,
            editPost: false,
            commentToEditId: '',
            postToEditId: '',
            posts: state.posts.map((post) => {
              if(post.id === action.comment.parentId) {
                post.comments = post.comments.filter(comment => comment.id !== action.comment.id)
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
