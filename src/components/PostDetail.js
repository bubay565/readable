import React, { Component } from 'react'
import { connect } from 'react-redux'
import { votePost, voteComment, deletePost, createComment, editPost, setCommentToEdit } from '../actions'
import Comments from './Comments'
import EditComment from './EditComment'

class PostDetail extends Component {
  votePost = (id, option) => {
    this.props.dispatch(votePost(id, option))
  }

  voteComment = (id, option) => {
    this.props.dispatch(voteComment(id, option))
  }

  deletePost = (id) => {
    this.props.dispatch(deletePost(id))
  }

  createComment = (values) => {
    this.props.dispatch(createComment(values))
  }

  editPost = (id) => {
    this.props.dispatch(editPost(id))
  }

  setCommentToEdit = (id) => {
    this.props.dispatch(setCommentToEdit(id))
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
          <p>Vote score: {post.voteScore}
              <button onClick={() => this.votePost(post.id, 'upVote')}>Vote Up</button>
              <button onClick={() => this.votePost(post.id, 'downVote')}>Vote Down</button>
              <button onClick={() => this.editPost(post.id)}>Edit Post</button>
              <button onClick={() => this.deletePost(post.id)}>Delete Post</button>
          </p>
          <div>
            <h2>Comments</h2>
            {this.props.editComment === true
            ?
              <EditComment
                id={post.comment.id}
                comment={post.comment.body}
                onEditComment={values => {
                  this.editComment(values)
                }}
              />
            :
              post.comments.length > 0
              ? post.comments.map(comment =>
                  <li className="posts-summary" key={comment.id}>
                    <div>
                      <ul>
                        <li className="posts-summary">{comment.author}</li>
                        <li className="posts-summary">{comment.body}</li>
                        <li className="posts-summary">{comment.timestamp}</li>
                        <li className="posts-summary">{comment.voteScore}</li>
                        <li className="posts-summary">
                          <button onClick={() => this.voteComment(comment.id, 'upVote')}>Vote Up</button>
                          <button onClick={() => this.voteComment(comment.id, 'downVote')}>Vote Down</button>
                          <button onClick={() => this.setCommentToEdit(comment.id, post.id)}>Edit Comment</button>
                          <button>Delete Comment</button>
                        </li>
                      </ul>
                    </div>
                  </li>
                )
              : <p>There are no comments for this post! Be the first to comment.</p>

            }
            <Comments
              parentId={post.id}
              onCreateComment={values => {
                this.createComment(values)
              }}
            />
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
    posts: state.posts.posts.filter(post => post.id === match.match.params.id),
    editComment: state.editComment,
    editPost: state.editPost
  }
}

export default connect(mapStateToProps)(PostDetail);
