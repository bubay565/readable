import React from 'react'
import { Link } from 'react-router-dom'

export default function DeletePost ({postId, category, title, onConfirmDelete, onCancelDelete}) {
  console.log('delete comp params', postId, category, title)
  return (
    <div>
      <p>Are you certain about deleting this post?</p>
      <div>
        <Link to="/" className='new-post' onClick={() => onConfirmDelete(postId)}>
            Delete
        </Link>
      </div>
      <div>
        <Link to={`/${category}/${postId}/${title}`} onClick={() => onCancelDelete()}>Cancel</Link>
      </div>
    </div>
  )
}
