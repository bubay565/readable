import React, { Component } from 'react'


class PostDetail extends Component {

  render(){
    console.log('post props', this.props)
    const post = this.props.post[0]
    return (
      <div className="posts">
        <h2>Post Detail</h2>
        <div>
          <p>Title: {post.title}</p>
          <p>{post.body}</p>
          <p>Vote score: {post.voteScore} <button>Vote Up</button> <button>Vote Down</button> <button>Edit Post</button> <button>Delete Post</button></p>
          <div>
            <h2>Comments</h2>
            {post.comments.length > 0
            ? post.comments.map(comment =>
                <li className="posts-summary" key={comment.id}>
                  <div>
                    <ul>
                      <li className="posts-summary">{comment.author}</li>
                      <li className="posts-summary">{comment.body}</li>
                      <li className="posts-summary">{comment.timestamp}</li>
                      <li className="posts-summary">{comment.voteScore}</li>
                      <li className="posts-summary"><button>Vote Up</button> <button>Vote Down</button> <button>Edit Comment</button> <button>Delete Comment</button></li>
                    </ul>
                  </div>
                </li>
              )
            : <p>There are no comments for this post! Be the first to comment.</p>
            }
          </div>
        </div>
      </div>
    )
  }

}


export default PostDetail
