import * as ReadableAPI from '../utils/api'

export const FETCH_POSTS = 'FETCH_POSTS'
export const DISPLAY_POSTS = 'DISPLAY_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const DISPLAY_COMMENT = 'DISPLAY_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UPVOTE_POST = 'UPVOTE_POST'
export const DOWNVOTE_POST = 'DOWNVOTE_POST'
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT'
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT'
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
  console.log('votePost', id, option)
  return (dispatch) => {
    return ReadableAPI.votePost(id, option)
    .then(res => {
      console.log('votepost result', res)
      console.log('new voteScore', res.voteScore)
      dispatch(upVotePost(res))
    });
  }
}

export function upVotePost(post){
  console.log('upvote post', post)
  return {
    type: UPVOTE_POST
  }
}

export function fetchComments(){
  return {
    type: FETCH_COMMENTS
  }
}

export function createPost({
  id, timestamp, title, body, author, category, voteScore = 1, deleted = false
}) {
  console.log('got here')
  return dispatch => {
    return ReadableAPI.createPost(id, timestamp, title, body, author, category)
    .then(
      dispatch(getPosts())
    );
  }
}

export function updatePost({id, timestamp, title, body, category}) {
  return {
    type: UPDATE_POST,
    id,
    timestamp,
    title,
    body,
    category
  }
}

export function deletePost({id}){
  return {
    type: DELETE_POST,
    id
  }
}

export function createComment(){
    return {
      type: CREATE_COMMENT
    }
  }

export function displayComments(comments){
  return {
    type: DISPLAY_COMMENT,
    comments
  }
}

export function updateComment(){
  return {
    type: UPDATE_COMMENT
  }
}

export function deleteComment({id}){
  return {
    type: DELETE_COMMENT,
    id
  }
}



export function downvotePost() {
  return {
    type: DOWNVOTE_POST
  }
}

export function upvoteComment({id}){
  console.log('comment id', id)
  return {
    type: UPVOTE_COMMENT,
    id
  }
}

export function downvoteComment() {
  return {
    type: DOWNVOTE_COMMENT
  }
}
