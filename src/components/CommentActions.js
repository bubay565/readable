import React, { Component } from 'react'
import { connect } from 'react-redux'
import { voteComment, setCommentToEdit, deleteComment } from '../actions'


class CommentActions extends Component {
  voteComment = (id, option) => {
    this.props.dispatch(voteComment(id, option))
  }

  setCommentToEdit = (id, parentId) => {
    this.props.dispatch(setCommentToEdit(id, parentId))
  }

  deleteComment = (id) => {
    this.props.dispatch(deleteComment(id))
  }

  render() {
    return (
      <li className="posts-summary">
        <button onClick={() => this.voteComment(this.props.commentId, 'upVote')}>Vote Up</button>
        <button onClick={() => this.voteComment(this.props.commentId, 'downVote')}>Vote Down</button>
        <button onClick={() => this.setCommentToEdit(this.props.commentId, this.props.postId)}>Edit Comment</button>
        <button onClick={() => this.deleteComment(this.props.commentId)}>Delete Comment</button>
      </li>
    )
  }
}

export default connect()(CommentActions);
