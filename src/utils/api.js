const api = 'http://localhost:5001'

let token = localStorage.token

if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8)
}

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getCategorisedPosts = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getSinglePost = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const createPost = (id, timestamp, title, body, author, category) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, timestamp, title, body, author, category })
  }).then(res => res.json())

export const votePost = (id, option) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())

export const editPost = (id,title, body) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  }).then(res => res.json())

export const deletePost = (id) =>
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  }).then()

export const getPostComments = (id) =>
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getSingleComment = (id) =>
  fetch(`${api}/comments/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const createComment = (id, timestamp, body, author, parentId) =>
fetch(`${api}/comments`, {
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ id, timestamp, body, author, parentId })
}).then(res => res.json())

export const voteComment = (id, option) =>
fetch(`${api}/comments/${id}`, {
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ option })
}).then(res => res.json())

export const editComment = (id, timestamp, body) =>
fetch(`${api}/comments/${id}`, {
  method: 'PUT',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ timestamp, body })
}).then(res => res.json())

export const deleteComment = (id) =>
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers : {
      ...headers,
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .then(data => data)
