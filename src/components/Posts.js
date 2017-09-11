import React from 'react'

export default function Posts({ posts }) {
  console.log('posts', posts)
  return (
    <div className="posts">
      <h2>Posts</h2>
      <div className="post-headers">
        <ul>
          <li>Title</li>
          <li>Author</li>
          <li>Vote Score</li>
          <li>Comments</li>
        </ul>
        <button className='shopping-list'>
            New Post
        </button>
        <select>
          <option value="timestamp">Most Recent</option>
          <option value="voteScore">Highest Votes</option>
        </select>
      </div>
      <ul>
        {posts.isLoading === true
          ? <li>Loading...</li>
          : posts.map((post) =>
            <li key={post.id}>
              <div>
                <ul>
                  <li>{post.title}</li>
                  <li>{post.body}</li>
                  <li>{post.author}</li>
                  <li>{post.voteScore}</li>
                </ul>
              </div>
            </li>
        )}
      </ul>
    </div>
  )
}
