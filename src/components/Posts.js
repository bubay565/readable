import React, { Component } from 'react'

class Posts extends Component {

  render(){
    const posts = this.props.posts.posts
    const sortPostsBy = this.props.sortPostsBy
    let sortParam = this.props.posts.sortParam
    return (
      <div className="posts">
        <h2>Posts</h2>
        <div className="post-headers">
          <button className='new-post'>
              New Post
          </button>
          <select onChange={(e) => {sortPostsBy(e.target.value)}}>
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
              : posts.filter(post => !post.deleted)
              .sort((post1, post2) => {
                return post1[sortParam] < post2[sortParam] ? -1 : 1;
              })
              .map((post) =>
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
}

export default Posts
