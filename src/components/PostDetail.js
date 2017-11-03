import React, { Component } from 'react'
import { connect } from 'react-redux'
import { votePost, voteComment, deletePost, createComment, setPostToEdit, editPost, setCommentToEdit, updateComment, deleteComment } from '../actions'
import Comments from './Comments'
import EditComment from './EditComment'
import EditPost from './EditPost'

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

  setPostToEdit = (id) => {
    this.props.dispatch(setPostToEdit(id))
  }

  editPost = (values) => {
    this.props.dispatch(editPost(values))
  }

  setCommentToEdit = (id, parentId) => {
    this.props.dispatch(setCommentToEdit(id, parentId))
  }

  updateComment = (values) => {
    this.props.dispatch(updateComment(values))
  }

  deleteComment = (id) => {
    this.props.dispatch(deleteComment(id))
  }

  render(){
    console.log('post detail props', this.props)
    const post = this.props.posts[0]
    if (!post) {
      return <div>Loading...</div>
    }

    if(this.props.editPost === true) {
      return(

          <EditPost
            post={post}
            onEditPost={values => {
              this.editPost(values)}}
          />

      )
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
                <button onClick={() => this.setPostToEdit(post.id)}>Edit Post</button>
                <button onClick={() => this.deletePost(post.id)}>Delete Post</button>
            </p>
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
                          <li className="posts-summary">
                            <button onClick={() => this.voteComment(comment.id, 'upVote')}>Vote Up</button>
                            <button onClick={() => this.voteComment(comment.id, 'downVote')}>Vote Down</button>
                            <button onClick={() => this.setCommentToEdit(comment.id, post.id)}>Edit Comment</button>
                            <button onClick={() => this.deleteComment(comment.id)}>Delete Comment</button>
                          </li>
                        </ul>
                      </div>
                    </li>
                  )
                : <p>There are no comments for this post! Be the first to comment.</p>
              }

              {this.props.editComment === true
              ?
                <EditComment
                  comment={post.comments.filter(comment => comment.id === this.props.commentToEditId)}
                  onEditComment={values => {
                    this.updateComment(values)
                  }}
                />
              :
                <Comments
                  parentId={post.id}
                  onCreateComment={values => {
                    this.createComment(values)
                  }}
                />
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
    posts: state.posts.posts.filter(post => post.id === match.match.params.id),
    editComment: state.posts.editComment,
    editPost: state.posts.editPost,
    postToEditId: state.posts.postToEditId,
    commentToEditId: state.posts.commentToEditId
  }
}

export default connect(mapStateToProps)(PostDetail);
