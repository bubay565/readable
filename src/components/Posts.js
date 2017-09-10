import React from 'react'

export default function Posts({ posts }) {
  console.log('posts', posts)
  console.log('posts.posts', posts.posts)
  return (
    <div className="posts">
      <h2>Posts</h2>
      <ul>
        {posts.isLoading === true
          ? <li>Loading...</li>
          : posts.posts.map((post) =>
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
