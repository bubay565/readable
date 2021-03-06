import * as ReadableAPI from '../utils/api'

export const FETCH_POSTS = 'FETCH_POSTS'
export const DISPLAY_POSTS = 'DISPLAY_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const SET_POST_TO_EDIT = 'SET_POST_TO_EDIT'
export const CANCEL_EDIT_POST = 'CANCEL_EDIT_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const CONFIRM_DELETE_POST = 'CONFIRM_DELETE_POST'
export const CANCEL_DELETE_POST = 'CANCEL_DELETE_POST'
export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const DISPLAY_COMMENT = 'DISPLAY_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const SET_COMMENT_TO_EDIT = 'SET_COMMENT_TO_EDIT'
export const CANCEL_EDIT_COMMENT = 'CANCEL_EDIT_COMMENT'
export const UPDATE_POST_VOTE = 'UPDATE_POST_VOTE'
export const UPDATE_COMMENT_VOTE = 'UPDATE_COMMENT_VOTE'
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const DISPLAY_CATEGORIES = 'DISPLAY_CATEGORIES'
export const SORT_POST = 'SORT_POST'

export function sortPostsBy(sortParam){
    return {
      type: SORT_POST,
      sortParam
    }
}

export function getCategories(){
  return (dispatch) => {
    dispatch(fetchCategories())
    return ReadableAPI.getCategories()
    .then(categories => {
      dispatch(displayCategories(categories));
    });
  }
}

export function fetchCategories(){
    return {
      type: FETCH_CATEGORIES
    }
}

export function displayCategories(categories){
  return {
    type: DISPLAY_CATEGORIES,
    categories
  }
}

export function getPosts(){
  return (dispatch) => {
    dispatch(fetchPosts())
    return ReadableAPI.getAllPosts()
    .then(posts => {
      return Promise.all(posts.map(post => {
        return Promise.resolve(post)
          .then(post => ReadableAPI.getPostComments(post.id))
          .then(comments => {
            post.comments = comments;
            return post
          });
      }))
    })
    .then(posts => {
      dispatch(displayPosts(posts))
    });
  }
}

export function fetchPosts(){
  return {
    type: FETCH_POSTS
  }
}

export function displayPosts(posts){
  return {
    type: DISPLAY_POSTS,
    posts
  }
}

export function votePost(id, option){
  return (dispatch) => {
    return ReadableAPI.votePost(id, option)
    .then(res => {
      dispatch(updatePostVote(res.id, res.voteScore))
    });
  }
}

export function updatePostVote(id, voteScore){
  return {
    type: UPDATE_POST_VOTE,
    id,
    voteScore
  }
}

export function voteComment(id, option){
  return (dispatch) => {
    return ReadableAPI.voteComment(id, option)
    .then(res => {
      dispatch(updateCommentVote(res.id, res.voteScore, res.parentId))
    });
  }
}

export function updateCommentVote(id, voteScore, parentId){
  return {
    type: UPDATE_COMMENT_VOTE,
    id,
    voteScore,
    parentId
  }
}

export function createPost({
  id, timestamp, title, body, author, category, voteScore = 1, deleted = false
}) {
  return dispatch => {
    return ReadableAPI.createPost(id, timestamp, title, body, author, category)
    .then(
      dispatch(getPosts())
    );
  }
}

export function setPostToEdit(id) {
  return {
    type: SET_POST_TO_EDIT,
    id
  }
}

export function cancelEditPost(){
  return {
    type: CANCEL_EDIT_POST
  }
}

export function editPost({id, title, post}){
  return dispatch => {
    return ReadableAPI.editPost(id, title, post)
    .then(res =>{
      dispatch(updatePost(res))
    })
  }
}

export function updatePost(post) {
  return {
    type: UPDATE_POST,
    post
  }
}

export function deletePost(id){
  console.log('delete', id)
  return dispatch => {
    return ReadableAPI.deletePost(id)
    .then(res => {
      dispatch(removeDeletedPost(id))
    })
  }
}

export function confirmDeletePost(id) {
  return {
    type: CONFIRM_DELETE_POST,
    id
  }
}

export function cancelDeletePost() {
  return {
    type: CANCEL_DELETE_POST
  }
}

export function removeDeletedPost(id){
  return {
    type: DELETE_POST,
    id
  }
}

export function createComment({parentId, id, author, body, timestamp}){
    return dispatch => {
      return ReadableAPI.createComment(id, timestamp, body, author, parentId)
        .then(res => {
          dispatch(addNewComment(res))
        });
    }
  }

export function addNewComment(comment){
  return {
    type: CREATE_COMMENT,
    comment
  }
}

export function displayComments(comments){
  return {
    type: DISPLAY_COMMENT,
    comments
  }
}

export function setCommentToEdit(id, parentId){
  return {
    type: SET_COMMENT_TO_EDIT,
    id,
    parentId
  }
}

export function cancelEditComment(){
  return {
    type: CANCEL_EDIT_COMMENT
  }
}

export function updateComment({id, timestamp, body}){
  console.log('updateComment', id, timestamp, body)
  return dispatch => {
    return ReadableAPI.editComment(id, timestamp, body)
      .then(res => {
        dispatch(commentUpdated(res))
      })
  }
}

export function commentUpdated(comment){
  return {
    type: UPDATE_COMMENT,
    comment
  }
}

export function deleteComment(id){
  return dispatch => {
    return ReadableAPI.deleteComment(id)
    .then(res => {
      console.log('delete', res)
      dispatch(commentDeleted(res))
    })
  }
}

export function commentDeleted(comment){
  return {
    type: DELETE_COMMENT,
    comment
  }
}
