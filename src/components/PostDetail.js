import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import Loading from 'react-loading'
import { voteComment, createComment, setCommentToEdit, updateComment, deleteComment, cancelEditComment } from '../actions'
import Comments from './Comments'
import EditComment from './EditComment'
import EditPost from './EditPost'
import DeletePost from './DeletePost'
import PostActions from './PostActions'
import NotFound from './NotFound'
import { getDate, getTime } from '../utils/helpers'

class PostDetail extends Component {

  voteComment = (id, option) => {
    this.props.dispatch(voteComment(id, option))
  }

  createComment = (values) => {
    this.props.dispatch(createComment(values))
  }

  setCommentToEdit = (id, parentId) => {
    this.props.dispatch(setCommentToEdit(id, parentId))
  }

  updateComment = (values) => {
    this.props.dispatch(updateComment(values))
  }

  cancelEditComment = () => {
    this.props.dispatch(cancelEditComment())
  }

  deleteComment = (id) => {
    this.props.dispatch(deleteComment(id))
  }

  render(){
    const post = this.props.posts[0]
    if (!post) {
      return <Loading delay={200} type='spin' color='#222' className='loading' />
    }

    if(post.deleted){
      return <NotFound />
    }

    if(this.props.editPost === true) {
      return <EditPost post={post} />
    }

    return (
      <div className="posts">
        <Modal
              className='modal'
              overlayClassName='overlay'
              isOpen={this.props.confirmDeleteModalOpen}
              onRequestClose={this.cancelDelete}
              contentLabel='Modal'
          >
              {this.props.confirmDeleteModalOpen &&
                <DeletePost post={post} />
              }
          </Modal>

        <h2>Post Detail</h2>
        <div>
            <p>Title: {post.title}</p>
            <p>{post.body}</p>
            <p>Vote score: {post.voteScore}
                <PostActions postId={post.id}/>

            </p>
            <div>
              <h2>Comments</h2>
              <div className="post-headers">
                <ul>
                  <li><strong>Author</strong></li>
                  <li><strong>Comment</strong></li>
                  <li><strong>Date and Time</strong></li>
                  <li><strong>Vote Score</strong></li>
                </ul>
              </div>
              {post.comments.length > 0
                ? post.comments.sort((comment1, comment2) => (
                  comment2.voteScore - comment1.voteScore
                )).map(comment =>
                    <li className="posts-summary" key={comment.id}>
                      <div>
                        <ul>
                          <li className="posts-summary">{comment.author}</li>
                          <li className="posts-summary">{comment.body}</li>
                          <li className="posts-summary">{`${getDate(comment.timestamp)} at ${getTime(comment.timestamp)}`}</li>
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
                  onCancelEditComment={this.cancelEditComment}
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
  return {
    posts: state.posts.posts.filter(post => post.id === match.match.params.id),
    editComment: state.posts.editComment,
    editPost: state.posts.editPost,
    postToEditId: state.posts.postToEditId,
    commentToEditId: state.posts.commentToEditId,
    confirmDeleteModalOpen: state.posts.confirmDeleteModalOpen
  }
}

export default connect(mapStateToProps)(PostDetail);
