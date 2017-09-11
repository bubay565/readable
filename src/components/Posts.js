import React from 'react'

export default function Posts({ posts }) {
  console.log('posts', posts)
  return (
    <div className="posts">
      <h2>Posts</h2>
      <div className="post-headers">
        <button className='shopping-list'>
            New Post
        </button>
        <select>
          <option value="timestamp">Most Recent</option>
          <option value="voteScore">Highest Votes</option>
        </select>
        <ul>
          <li><strong>Title</strong></li>
          <li><strong>Author</strong></li>
          <li><strong>Vote Score</strong></li>
          <li><strong>Comments</strong></li>
        </ul>
      </div>
      <div className="posts-list">
        <ul>
          {posts.isLoading === true
            ? <li>Loading...</li>
            : posts.map((post) =>
              <li key={post.id}>
                <div>
                  <ul>
                    <li className="posts-summary"><a href="abc">{post.title}</a></li>
                    <li className="posts-summary">{post.author}</li>
                    <li className="posts-summary">{post.voteScore}</li>
                    <li className="posts-summary">{post.comments.length}</li>
                  </ul>
                </div>
              </li>
          )}
        </ul>
      </div>
    </div>
  )
}
