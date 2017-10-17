import React, { Component } from 'react'
import { connect } from 'react-redux'
import { votePost } from '../actions'


class PostDetail extends Component {
  votePost = (id, option) => {
    this.props.dispatch(votePost(id, option))
  }

  render(){
    console.log('post detail props', this.props)
    const post = this.props.posts[0]
    if (!post) {
      return <div>Loading...</div>
    }
    return (
      <div className="posts">
        <h2>Post Detail</h2>
        <div>
          <p>Title: {post.title}</p>
          <p>{post.body}</p>
          <p>Vote score: {post.voteScore} <button onClick={() => this.votePost(post.id, 'upVote')}>Vote Up</button> <button>Vote Down</button> <button>Edit Post</button> <button>Delete Post</button></p>
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

function mapStateToProps(state, match){
  console.log('post detail state', state)
  console.log('post detail match', match)
  return {
    posts: state.posts.posts.filter(post => post.id === match.match.params.id)
  }
}

export default connect(mapStateToProps)(PostDetail);
