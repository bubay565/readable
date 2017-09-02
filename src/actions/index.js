export const CREATE_POST = 'CREATE_POST'
export const READ_POST = 'READ_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const READ_COMMENT = 'READ_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UPVOTE = 'UPVOTE'
export const DOWNVOTE = 'DOWNVOTE'
export const CATEGORIES = 'CATEGORIES'

export function categories(){
  return {
    type: CATEGORIES
  }
}

export function createPost({
  id, timestamp, title, body, author, category, voteScore = 1, deleted = false
}) {
  return {
    type: CREATE_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted
  }
}

export function readPosts(){
  return {
    type: READ_POST,
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

export function readComment({id}){
  return {
    type: READ_COMMENT,
    id
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

export function upvote(){
  return {
    type: UPVOTE
  }
}

export function downvote() {
  return {
    type: DOWNVOTE
  }
}
