import React from 'react'

export default function PostDetail({ match }) {
  return (
    <div className="posts">
      <h2>Post Detail</h2>
      <p>{match.params.post}</p>
    </div>
  )
}
