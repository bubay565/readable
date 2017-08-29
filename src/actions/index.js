export const CREATE_POST = 'CREATE_POST'
export const READ_POST = 'READ_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'

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
    voteScore
  }
}

export function readPost({id}){
  return {
    type: READ_POST,
    id
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

export function deletePost({}){
  return {
    type: DELETE_POST,
    id
  }
}
