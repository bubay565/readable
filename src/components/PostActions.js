import React, { Component } from 'react'
import { connect } from 'react-redux'
import { votePost, setPostToEdit, confirmDeletePost } from '../actions'

class PostActions extends Component {
  votePost = (id, option) => {
    this.props.dispatch(votePost(id, option))
  }

  setPostToEdit = (id) => {
    this.props.dispatch(setPostToEdit(id))
  }

  setPostToDelete = (id) => {
    this.props.dispatch(confirmDeletePost(id))
  }

  render() {
    return (
      <li className="posts-summary">
          <button onClick={() => this.votePost(this.props.postId, 'upVote')}>Vote Up</button>
          <button onClick={() => this.votePost(this.props.postId, 'downVote')}>Vote Down</button>
          <button onClick={() => this.setPostToEdit(this.props.postId)}>Edit Post</button>
          <button onClick={() => this.setPostToDelete(this.props.postId)}>Delete Post</button>
      </li>
    )
  }
}

export default connect()(PostActions);
